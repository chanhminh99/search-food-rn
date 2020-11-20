import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer qexMHP3Cuv2St_HumaOqFlKp7W3aNPbzNsVevOBVsHA8sEgf54EEmGgetSwXJOkr9k1Zzue7B39J91uGSAUjTWZ8-r002CeofUmlg4yK5fpVCa2Y5lItjRaTzE-qX3Yx'
  }
})
