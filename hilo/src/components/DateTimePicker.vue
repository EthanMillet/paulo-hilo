<template>
  <div class="date-time-picker">
    <div class="calendar">
      <div class="days">
        <span
          v-for="(day, index) in daysInCalendar"
          :key="index"
          :class="[
            'day',
            { selected: day.currentMonth && day.day === selectedDate },
            { weekday: isWeekday(day.index) },
            { 'other-month': !day.currentMonth },
            { 'past-date': day.isPastDate },
          ]"
          @click="!day.isPastDate && day.currentMonth && selectDate(day.day)"
        >
          {{ day.day }}
          <div
            v-if="
              day.currentMonth &&
              (day.day === selectedDate || (!selectedDate && isCurrentDate(day)))
            "
            class="red-dot"
          ></div>
        </span>
      </div>
    </div>

    <div class="time-slots">
      <button
        type="button"
        class="primary-btn"
        v-for="(time, index) in availableTimes"
        :key="index"
        :class="['time-slot', { selected: time === selectedTime }]"
        @click="selectTime(time)"
      >
        {{ time }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear(),
      availableTimes: ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm"],
      daysInCalendar: [],
      selectedDate: null,
      selectedTime: null,
      today: new Date(),
    };
  },
  mounted() {
    this.calculateDaysInCalendar();
  },
  methods: {
    calculateDaysInCalendar() {
      const currentMonthDays = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
      const firstDayOfMonth = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
      const previousMonthDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();

      const today = this.today;
      const isCurrentMonth = this.selectedMonth === today.getMonth() && this.selectedYear === today.getFullYear();

      const days = [];
      for(let i = firstDayOfMonth - 1; i >= 0; i--) {
        days.push({
          day: previousMonthDays - i,
          currentMonth: false,
          index: days.length,
        });
      }

      for(let i = 1; i <= currentMonthDays; i++) {
        const isPastDate =
          isCurrentMonth && i < today.getDate();

        days.push({
          day: i,
          currentMonth: true,
          index: days.length,
          isPastDate,
        });
      }

      const remainingSlots = 42 - days.length;
      for(let i = 1; i <= remainingSlots; i++) {
        days.push({
          day: i,
          currentMonth: false,
          index: days.length,
        });
      }

      this.daysInCalendar = days;
    },

    selectDate(day) {
      this.selectedDate = day;
      this.emitDateTime();
    },
    selectTime(time) {
      this.selectedTime = time;
      this.emitDateTime();
    },
    emitDateTime() {
      if (this.selectedDate && this.selectedTime) {
        const dateTimeString = `${this.selectedYear}-${String(
          this.selectedMonth + 1
        ).padStart(2, "0")}-${String(this.selectedDate).padStart(2, "0")} ${this.convert(
          this.selectedTime
        )}`;

        const dateTime = new Date(dateTimeString);
        console.log("dateTime :>> ", dateTime);
        this.$emit("selected", dateTime);
      }
    },
    convert(time) {
      const [hourMinute, meridian] = time.split(" ");
      let [hour, minute] = hourMinute.split(":").map(Number);

      if (meridian.toLowerCase() === "pm" && hour !== 12) {
        hour += 12;
      } else if (meridian.toLowerCase() === "am" && hour === 12) {
        hour = 0;
      }

      return `${String(hour).padStart(2, "0")}:${minute}:00`;
    },
    isWeekday(index) {
      const dayIndex = index % 7;
      return dayIndex >= 1 && dayIndex <= 5;
    },
    isCurrentDate(day) {
      const today = this.today;
      return (
        day.day === today.getDate() &&
        this.selectedMonth === today.getMonth() &&
        this.selectedYear === today.getFullYear()
      );
    },
  },
};
</script>
<style scoped>
.date-time-picker {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  font-family: Arial, sans-serif;
  margin-top: 15px;
}
.calendar {
  display: grid;
}
.week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  font-weight: bold;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 13px;
}
.day {
  height: 28px;
  width: 28px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  font-size: 13px;
  position: relative;
}
.day.selected {
  background-color: #007bff;
  color: white;
}
.time-slots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.time-slot {
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: rgb(38, 38, 38);
  font-weight: 500;
}
.time-slot.selected {
  background-color: #007bff;
  color: white;
}
.day.weekday {
  background-color: #007bff;
  color: #fff;
}
.day.other-month {
  background-color: transparent;
  color: #cfcfcf;
  cursor: not-allowed;
}
.day.past-date {
  background-color: #d0e5ff;
  color: #fff;
  cursor: not-allowed;
}
.red-dot {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  height: 5px;
  width: 5px;
  background-color: red;
  border-radius: 50%;
}
</style>
