<template>
    <div class="form-container">
        <h2>{{ title }}</h2>
        <div class="form-group">
            <label for="is-connected">Are you already connected with a flight school?</label>
            <select v-model="form.isConnected" id="is-connected">
                <option :value="false" disabled selected>Choose one...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>

        <div class="form-group">
            <label for="flight-school">Search flight schools</label>
            <div class="search-container">
                <IconSearch class="default-icon" />
                <input
                    type="search"
                    v-model="form.flightSchool"
                    id="flight-school"
                    placeholder="Search schools..."
                    @focus="isFocused = true"
                    @blur="handleBlur"
                    autocomplete="off"
                >
            </div>

            <div class="search-results" v-if="isFocused">
                <ul v-if="!(filteredSchools || []).length">
                    <li>No item/s</li>
                </ul>
                <ul v-else>
                    <li 
                        v-for="(school, index) in filteredSchools"
                        :key="index"
                        class="search-options"
                        @mousedown="$emit('populate', school, false)"
                    >
                        {{ school.flightSchoolName }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="form-group">
            <div class="search-action">
                <span>Don't see your flight school on the list?</span>
                <button type="button" @click="$emit('showModal')">Add it here</button>
            </div>
        </div>

        <div class="form-group">
            <label for="flight-school-name">Flight school name</label>
            <input
                type="text"
                v-model="form.flightSchoolName"
                id="flight-school-name"
                placeholder="School Name..."
            >
        </div>

        <div class="form-group">
            <div class="flex-row" :style="$global.dynamicCols(2)">
                <div class="form-group">
                    <label for="point-of-contact">Flight school point of contact</label>
                    <input
                        type="text"
                        v-model="form.pointOfContact"
                        id="point-of-contact"
                        placeholder="Name..."
                    >
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input
                        type="text"
                        v-model="form.phone"
                        id="phone"
                        placeholder="Phone number..."
                    >
                </div>
            </div>
        </div>

        <div class="form-group">
            <label>What is the flight school address?</label>
            <input
                type="text"
                v-model="form.street"
                id="street"
                placeholder="Street address..."
            >
            <div class="flex-row sm-gap" :style="$global.dynamicCols(2)">
                <div class="form-group">
                    <input
                        type="text"
                        v-model="form.aptOrSuite"
                        id="apt-or-suite"
                        placeholder="Apt. or Suite..."
                    >
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        v-model="form.city"
                        id="city"
                        placeholder="City..."
                    >
                </div>
            </div>

            <div class="flex-row sm-gap" :style="$global.dynamicCols(3)">
                <div class="form-group">
                    <input
                        type="text"
                        v-model="form.state"
                        id="state"
                        placeholder="State..."
                    >
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        v-model="form.zip"
                        id="zip"
                        placeholder="Zip..."
                    >
                </div>
                <div class="form-group">
                    <input
                        type="text"
                        v-model="form.country"
                        id="country"
                        placeholder="Country..."
                    >
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="startDate">Select start date</label>
            <input
                type="date"
                v-model="form.startDate"
                id="startDate"
                placeholder="Website..."
            >
        </div>

        <div class="form-group">
            <button type="submit" class="primary-btn" @click.prevent="$emit('onNext')">Next</button>
        </div>

    </div>
</template>
<script>
import IconSearch from '../icons/IconSearch.vue';

export default {
    components: { IconSearch },
    props: {
        form: {
            type: Object,
            required: true
        },
        flightSchools: {
            type: Array,
            required: true,
            default: []
        },
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isFocused: false,
        }
    },
    computed: {
        filteredSchools() {
            const val = (this.form.flightSchool || "").toLowerCase().trim();
            return this.flightSchools.filter((school) => {
                return school.flightSchoolName.toLowerCase().includes(val);
            });
        },
    },
    methods: {
        handleBlur() {
            setTimeout(() => {
                this.isFocused = false;
            }, 50);
        }
    }
}
</script>
<style>
.search-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.search-action span {
    font-size: x-small;
}
.search-action button {
    background-color: var(--vt-c-text-primary);
    border: none;
    border-radius: 5px;
    padding: 0.3rem 1.5rem;
    color: #fff;
    font-size: small;
}

.search-results {
    position: absolute;
    margin-top: 4.2rem;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 100%;
    z-index: 1;
}
.search-results ul {
    padding: 0;
    overflow-y: auto;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    font-size: 13px;
}
.search-results ul li {
    list-style: none;
    padding: 0.5rem 1rem;
    transition: .2s ease-in-out;
}
.search-options {
    cursor: pointer;
}
.search-options:hover {
    background: #ececec;
}
</style>