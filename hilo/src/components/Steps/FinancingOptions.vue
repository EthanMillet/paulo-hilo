<template>
  <div :class="$style.frameParent">
    <h2 :class="$style.financingOptions">{{ title }}</h2>
    <div :class="$style.howDoYouPlanToPayForFliParent">
      <label :class="$style.howDoYou">How do you plan to pay for flight school?</label>
      <div :class="$style.chooseOneParent" @click="isShow = !isShow">
        <select v-model="form.paymentType">
          <option value="false" disaled selected>Choose one...</option>
        </select>
        <img :class="$style.vectorIcon" :src="CaretDown" />
      </div>
    </div>
    <div :class="$style.seeAvailableFinancingOptionParent">
      <b :class="$style.seeAvailableFinancing">See Available Financing Options</b>
      <div :class="$style.inOrderTo">
        In order to see available financing options we’ll need more information.
      </div>
    </div>
    <div :class="$style.frameGroup">
      <div :class="$style.tuitionAmountParent">
        <label for="tuition-amount" :class="$style.howDoYou">Tuition amount</label>
        <div :class="$style.typeTuitionAmountWrapper">
          <input v-model="form.tuitionAmount" type="text" id="tuition-amount" placeholder="Type tuition amount...">
        </div>
      </div>
      <div :class="$style.tuitionAmountParent">
        <div :class="$style.howDoYou">Loan amount</div>
        <div :class="$style.typeTuitionAmountWrapper">
          <div :class="$style.chooseOneGroup">
            <select v-model="form.loanAmount">
              <option value="false" disaled selected>Choose one...</option>
            </select>
            <img :class="$style.vectorIcon" :src="CaretDown" />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.howDoYouPlanToPayForFliParent">
      <label for="ssn" :class="$style.howDoYou">9 Digit SSN...</label>
      <div :class="$style.typeTuitionAmountWrapper">
        <input v-model="form.ssn" type="text" id="ssn" placeholder="9 Digit SSN...">
      </div>
    </div>
    <div :class="$style.cosignerParent">
      <label for="co-signer" :class="$style.cosigner">Cosigner</label>
      <div :class="$style.nameWrapper">
        <input v-model="form.coSignerName" type="text" id="co-signer" placeholder="Name...">
      </div>
      <div :class="$style.frameContainer" :style="$global.dynamicCols(2)">
        <div :class="$style.phoneNumberWrapper">
          <input v-model="form.coSignerPhone" type="text" placeholder="Phone number...">
        </div>
        <div :class="$style.coSignerEmail">
          <input v-model="form.coSignerEmail" type="text" placeholder="Email...">
        </div>
      </div>
      <div :class="$style.relationshipParent">
        <select v-model="form.coSignerRelationship">
          <option value="false" disaled selected>Relationship...</option>
        </select>
        <img :class="$style.vectorIcon" :src="CaretDown" />
      </div>
      <div :class="$style.nameWrapper">
        <input v-model="form.coSignerSsn" type="text" placeholder="9 Digit SSN...">
      </div>
    </div>
    <div :class="$style.iconamooncheckBoldParent">
      <input type="checkbox" id="check" :class="$style.iconamooncheckBold" v-model="form.softCreditCheck" />
      <label :class="$style.checkTheBox" for="check">
        Check the box to allow us to perform a soft credit check and provide you with
        lenders willing to fund your student tuition.
      </label>
    </div>
    <button :class="$style.nextWrapper" @click.prevent="$emit('onNext')">Next</button>
    <div :class="$style.frameDiv" />
  </div>
</template>
<script>
import CaretDown from "@/assets/images/CaretDown.png";
export default {
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
      CaretDown,
      isShow: false,
    };
  },
};
</script>
<style module>
.financingOptions {
  align-self: stretch;
  position: relative;
  font-size: 45px;
}

.howDoYou,
.cosigner {
  position: relative;
  font-size: small;
}

.vectorIcon {
  width: 0.6rem;
  position: absolute;
  right: 15px;
}

.cosigner {
  color: #404040;
}

.chooseOneParent,
.typeTuitionAmountWrapper,
.nameWrapper,
.relationshipParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
}

.frameParent select,
.frameParent input:not([type="checkbox"]) {
  width: 100%;
  border: none;
  background-color: rgba(64, 64, 64, 0.05);
  padding: 0.6rem 0.8rem;
  border-radius: 5px;
  color: rgba(64, 64, 64, 0.5);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.howDoYouPlanToPayForFliParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.seeAvailableFinancing {
  align-self: stretch;
  position: relative;
  font-weight: bold;
  font-size: 22px;
}

.inOrderTo,
.digitSsn1 {
  align-self: stretch;
  position: relative;
  font-size: 12px;
}

.seeAvailableFinancingOptionParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.tuitionAmountParent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.chooseOneGroup {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.frameGroup {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;
}

.frameContainer {
  width: 100%;
  display: grid;
  gap: 10px;
}

.cosignerParent {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  color: rgba(64, 64, 64, 0.5);
}

.iconamooncheckBold {
  width: 19px;
  position: relative;
  border-radius: 5px;
  height: 19px;
  overflow: hidden;
  flex-shrink: 0;
}

.checkTheBox {
  margin: 0;
  font-size: 11px;
  line-height: 12px;
}

.iconamooncheckBoldParent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 15px;
  color: rgba(64, 64, 64, 0.75);
}

.nextWrapper {
  background-color: var(--vt-c-text-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 1.5rem;
  font-size: small;
  font-weight: bold;
  cursor: pointer;
  transition: .2s ease-in-out;
  width: 100%;
}

.frameDiv {
  width: 100px;
  position: relative;
  background-color: #fff;
  height: 100px;
  overflow: hidden;
  flex-shrink: 0;
}

.frameParent {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fff;
  overflow-y: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 999;
  box-sizing: border-box;
  gap: 15px;
  text-align: left;
  font-size: 18px;
  color: #404040;
  font-family: Helvetica;
}
</style>
