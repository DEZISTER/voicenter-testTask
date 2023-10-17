import { defineStore } from "pinia";
import axios from 'axios'
const url = "https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data"

export const useGlobalStore = defineStore("globalStore", {
  state: () => ({
    testTaskHeaderImage: null,
    testTaskSecondDescriptiveBlockItems: null,
    testTaskSlidesBlockSlides: null
  }),

  actions: {
    async getImages() {
      const data = await axios.get(`${url}`);
      // console.log('data', data.data.data)
      this.testTaskHeaderImage = data.data.data.siteData.testTaskTemplate_30_15673.testTaskHeaderImage;
      this.testTaskSecondDescriptiveBlockItems = eval(data.data.data.siteData.testTaskTemplate_30_15673.testTaskSecondDescriptiveBlockItems);
      this.testTaskSecondDescriptiveBlockItems.splice(this.testTaskSecondDescriptiveBlockItems.length-1)
      this.testTaskSlidesBlockSlides = eval(data.data.data.siteData.testTaskTemplate_30_15673.testTaskSlidesBlockSlides);
      // console.log('1: ', this.testTaskHeaderImage)
      // console.log('2: ', this.testTaskSecondDescriptiveBlockItems)
      // console.log('3: ', this.testTaskSlidesBlockSlides)
    },
  },
});