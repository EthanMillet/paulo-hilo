<template>
    <main>
        <form @submit.prevent="next" class="flight-school-connect-form">

            <Steps :step="step" />

            <!-- STEP 3 -->
            <FlightSchoolConnect
                v-if="step === 3"
                :form="form"
                @onNext="next"
                @showModal="showAddModal"
                @populate="handleAdd"
                :flightSchools="flightSchools"
                title="Flight School Connect"
            />

            <!-- STEP 4 -->
            <MedicalQuestions
                v-if="step === 4"
                :form="form"
                @onNext="next"
                title="Medical Questions"
            />

        </form>

        <!-- ADD FLIGHT SCHOOL CONNECT MODAL -->
        <PortalPopup
            v-if="showModal"
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Centered"
            :onOutsideClick="closeAddFlightSchool"
        >
            <AddFlightSchool
                @onClose="closeAddFlightSchool"
                @onSubmit="handleAdd"
            />
        </PortalPopup>
    </main>
</template>
<script>
import Steps from './Steps.vue';
import PortalPopup from "./PortalPopup.vue";
import AddFlightSchool from "./AddFlightSchool.vue";
import FlightSchoolConnect from "./Steps/FlightSchoolConnect.vue";
import MedicalQuestions from './Steps/MedicalQuestions.vue';

export default {
    components: { Steps, AddFlightSchool, PortalPopup, FlightSchoolConnect, MedicalQuestions },
    data() {
        return {
            step: 3,
            form: {},
            showModal: false,
            flightSchools: []
        }
    },
    created() {
        ["isConnected", "gender", "medicalType", "localAME"]
            .forEach((key) => this.form[key] = false);
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        next() {
            this.step++;
        },
        handleAdd(form, isAdd = true) {
            Object.keys(form).forEach(key => {
                this.form[key] = form[key];
            });

            if(isAdd) this.flightSchools.push(form);
        },
        previous() {
            if (this.step > 1) this.step--;
        },
        closeAddFlightSchool() {
            this.showModal = false;
        },
    }
}
</script>
<style>
.flight-school-connect-form {
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 620px;
    gap: 1rem;
    margin: 0 auto;
    padding: 3rem 7rem;
    background-color: var(--color-background);
}
.flight-school-connect-form h2 {
    font-weight: bold;
    font-size: 1.7rem;
}
.form-group h3 {
    font-weight: bold;
    font-size: 1.2rem;
}
.form-group.description {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.form-group p {
    font-size: 12px;
    line-height: 17px;
}
</style>