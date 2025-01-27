<template>
    <main>
        <form @submit.prevent="next">

            <Steps :step="step" />
            <h2>Flight School Connect</h2>

            <div class="form-container">
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
                        >
                    </div>

                    <div class="search-results" v-if="form.flightSchool">
                        <ul>
                            <li>No item/s</li>
                        </ul>
                    </div>
                </div>

                <div class="form-group">
                    <div class="search-action">
                        <span>Don't see your flight school on the list?</span>
                        <button type="button" @click="showAddModal">Add it here</button>
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
                    <div class="flex-row" :style="dynamicCols(2)">
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
                    <div class="flex-row sm-gap" :style="dynamicCols(2)">
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

                    <div class="flex-row sm-gap" :style="dynamicCols(3)">
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
                    <button type="submit" class="primary-btn">Next</button>
                </div>

            </div>
        </form>
    </main>
</template>
<script>
import Steps from './Steps.vue';
import IconSearch from './icons/IconSearch.vue';
export default {
    components: { Steps, IconSearch },
    data() {
        return {
            step: 3,
            form: {
                isConnected: false
            },
            showModal: false
        }
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        dynamicCols(cols) {
            return { gridTemplateColumns: `repeat(${cols}, 1fr)` }
        },
        next() {
            this.step++;
        }
    }
}
</script>
<style scoped>
form {
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 620px;
    gap: 1rem;
    margin: 0 auto;
    padding: 3rem 7rem;
    background-color: var(--color-background);
}
form h2 {
    font-weight: bold;
    font-size: 1.7rem;
}
.form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
}
.form-group label {
    font-size: small;
}
.form-group select, .form-group input {
    padding: 0.6rem;
    background-color: rgba(64, 64, 64, 0.05);
    border: none;
    border-radius: 5px;
    width: 100%;
}
.search-container {
    position: relative;
}
.default-icon {
    position: absolute;
    margin: 0.5rem 0.5rem 0.5rem 0.8rem;
    height: 18px;
}
.search-container input {
    padding-left: 2.5rem;
}
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
    padding: 0.5rem 1rem;
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
}

.flex-row {
    display: grid;
    gap: 20px;
}
.flex-row.sm-gap {
    gap: 5px;
}
.primary-btn, button {
    background-color: var(--vt-c-text-primary);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    font-size: small;
    font-weight: bold;
    cursor: pointer;
    transition: .2s ease-in-out;
}
.primary-btn:hover, button:hover {
    opacity: .8;
}
</style>