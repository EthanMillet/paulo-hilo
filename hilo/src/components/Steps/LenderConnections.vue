<template>
    <div :class="$style.frameParent">
        <h2 :class="$style.lenderConnections">{{ title }}</h2>
        <div :class="$style.connectWithLendersSeeIfYParent">
            <div>Connect with lenders. See if you qualify.</div>
            <div :class="$style.thisWontAffect">This won’t affect your credit score</div>
            <div :class="$style.iconamooncheckBold">
                <div>Apply To All</div>
            </div>
        </div>
        <div :class="$style.frameGroup">
            <div
                v-for="(card, index) in cards"
                :key="index"
                :class="$style[card.class]"
                :style="{ backgroundColor: card.bgColor }"
            >
                <div :class="$style.frameDiv">
                    <div :class="$style.cardContent">
                        <div :class="$style.cardHeaderText">Lending Available</div>
                        <b :class="$style.cardTitle">Orange County Lending</b>
                        <div :class="$style.cardDescription">Secure funding for your flight school with Orange County
                            Lending. Schedule a call or apply now to get started.</div>
                    </div>
                    <div :class="$style.cardActions">
                        <div :class="$style.applyContainer">
                            <b :class="$style.applyBtn">Apply</b>
                        </div>
                        <div :class="$style.moreContainer">
                            <div>More</div>
                        </div>
                    </div>
                </div>
                <div :class="$style.planeContainer">
                    <div :class="$style.planeLine" />
                    <img :src="Plane" :class="$style.planeIcon">
                </div>
            </div>
        </div>
        <div :class="$style.moreOptionsBtn">
            <div>More options</div>
        </div>
        <button :class="$style.nextWrapper" @click.prevent="$emit('onNext')">Next</button>
        <div :class="$style.frameChild9" />
    </div>
</template>
<script>
import Plane from "@/assets/images/Plane.png";
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            Plane,
            cards: [
                { class: "frameContainer", bgColor: "#0088ff" },
                { class: "frameParent3", bgColor: "#53c7b6" },
                { class: "frameParent7", bgColor: "#1ca323" },
                { class: "frameParent11", bgColor: "#d55afb" },
                { class: "frameParent15", bgColor: "#ff4f4f" },
                { class: "frameParent19", bgColor: "#ffa42d" }
            ]
        }
    },
}
</script>
<style module>
.frameParent {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.applyBtn {
    position: relative;
    font-weight: bold;
    font-size: 12px;
}

.thisWontAffect {
    position: relative;
    font-size: 10px;
}

.iconamooncheckBold {
    border-radius: 5px;
    background-color: #3c78ff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease-in-out;
}

.planeIcon {
    position: absolute;
    right: 40px;
    height: 70px;
    transform: rotate(8deg);
}

.connectWithLendersSeeIfYParent {
    align-self: stretch;
    height: 27px;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 11px;
}

.cardHeaderText {
    width: 154.7px;
    font-size: 9px;
    position: relative;
    display: inline-block;
}

.cardTitle {
    width: 120px;
    position: relative;
    font-size: 13px;
    font-weight: 600;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.cardDescription {
    width: 120px;
    position: relative;
    font-size: 11px;
    line-height: 14px;
    font-weight: 300;
    color: #fffffff7;
    display: -webkit-inline-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.cardContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3px;
    box-sizing: border-box;
}

.applyContainer {
    border-radius: 12.63px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 12.6px;
    cursor: pointer;
    transition: .2s ease-in-out;
}

.moreContainer {
    border-radius: 12.63px;
    background-color: rgba(255, 255, 255, 0.25);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px 12.6px;
    color: #fff;
    cursor: pointer;
    transition: .2s ease-in-out;
}

.applyContainer:hover,
.moreContainer:hover,
.moreOptionsBtn:hover,
.iconamooncheckBold:hover {
    opacity: .8;
}

.cardActions {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    font-size: 13px;
    color: #404040;
}

.frameDiv {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 12.6px 12.6px 0px;
    gap: 9.5px;
}

.planeLine {
    position: absolute;
    top: -38.93px;
    left: 242.35px;
    border-radius: 20.63px;
    border: 2.1px solid #fff;
    box-sizing: border-box;
    width: 103.4px;
    height: 297.7px;
    overflow: hidden;
    transform: rotate(65deg);
    transform-origin: 0 0;
}

.planeContainer {
    width: 180px;
    position: relative;
    height: 70px;
    overflow: hidden;
    flex-shrink: 0;
}

.frameContainer,
.frameParent3,
.frameParent7,
.frameParent11,
.frameParent15,
.frameParent19 {
    border-radius: 9.47px;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.moreOptionsBtn {
    border-radius: 10px;
    background-color: rgba(64, 64, 64, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    font-weight: 400;
    transition: .2s ease-in-out;
}

.frameGroup {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    font-size: 10px;
    color: #fff;
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

.frameChild9 {
    width: 100px;
    position: relative;
    height: 100px;
    overflow: hidden;
    flex-shrink: 0;
}
</style>