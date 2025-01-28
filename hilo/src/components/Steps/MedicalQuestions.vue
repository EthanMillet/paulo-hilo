<template>
  <div class="form-container">
    <h2>{{ title }}</h2>

    <div class="form-group">
      <div class="flex-row sm-gap" :style="$global.dynamicCols(2)">
        <div class="form-group">
          <label for="point-of-contact">Height</label>
          <span class="absolute suffix">FT</span>
          <input type="text" v-model="form.height" placeholder="Type feet..." />
        </div>
        <div class="form-group">
          <span class="absolute suffix">IN</span>
          <input type="text" v-model="form.inches" placeholder="Type inches..." />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="flex-row sm-gap" :style="$global.dynamicCols(2)">
        <div class="form-group">
          <label for="weight">Weight</label>
          <span class="absolute suffix">LBS</span>
          <input
            type="text"
            v-model="form.weight"
            placeholder="Type weight in pounds..."
            id="weight"
          />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="form.gender" id="gender">
            <option :value="false" disabled selected>Choose one...</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="form-group">
        <label for="medicalType">Already have a medical? (Choose the type)</label>
        <select v-model="form.medicalType" id="medicalType">
          <option :value="false" disabled selected>Choose one...</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <div class="upload-action">
        <span>Upload a copy of your medical certificate if applicable.</span>
        <label for="medical-certificate" class="upload-btn">
          Upload
          <input
            type="file"
            id="medical-certificate"
            @change="handleFileUpload"
            class="hidden-file-input"
          />
        </label>
      </div>
    </div>

    <div class="form-group description">
      <h3>Meet with a local AME</h3>
      <p>
        In order to be medically approved to fly you must meet with a Aviation Medical
        Examiner (AME). Choose your preferred medical professional and a time below.
        Appointments typically last an hour.
      </p>
    </div>

    <div class="form-group">
        <label for="localAME">Choose a local AME:</label>
        <select v-model="form.localAME" id="localAME">
          <option :value="false" disabled selected>Choose one...</option>
        </select>
    </div>

    <div class="form-group">
        <label>Schedule a time to meet with them:</label>
        <DateTimePicker @selected="selectedDate" />
    </div>

    <div class="form-group">
      <button type="submit" class="primary-btn" @click.prevent="$emit('onNext')">
        Next
      </button>
    </div>
  </div>
</template>
<script>
import DateTimePicker from "../DateTimePicker.vue";

export default {
  components: { DateTimePicker },
  props: {
    title: {
      type: String,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      medicalCertificates: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if(file) this.medicalCertificates = file;
    },
    selectedDate(date) {
        this.form.selectedSchedule = date;
    }
  },
};
</script>
<style>
span.suffix {
  right: 10px;
  bottom: 8px;
  font-size: 13px !important;
  background-color: #f5f5f5;
  padding-left: 3px;
}
.upload-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.upload-action span {
  font-size: 12px;
}

.upload-btn {
  background-color: var(--vt-c-text-primary);
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 0.5rem 0.8rem !important;
  font-size: 12px !important;
  cursor: pointer;
  font-weight: 600;
}

.hidden-file-input {
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
