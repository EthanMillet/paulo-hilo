<template>
    <form class="form" @submit.prevent="submit">
        <img class="vector" height="12" :src="Vector" @click="closeModal" />
        <h2 class="text-center">Add Flight School</h2>

        <div class="form-container">
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
                <button type="submit" class="primary-btn">Send</button>
            </div>
        </div>
    </form>
</template>
<script>

import Vector from "../assets/images/Vector.png";
export default {
    data() {
        return {
            form: {},
            Vector
        }
    },
    methods: {
        closeModal() {
            this.$emit('onClose');
        },
        submit() {
            this.$emit('onSubmit', this.form);
            this.closeModal();
        }
    }
}
</script>
<style scoped>
.form {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background: #fff;
    padding: 25px;
    max-width: 450px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.form h2 {
    font-weight: 700;
    font-size: 18px;
}
.vector {
    position: absolute;
    right: 25px;
    cursor: pointer;
}
</style>