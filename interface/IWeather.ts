export default interface IWeather {
    name: string,
    main: {
      humidity: number
      temp: number
    },
    weather: [
      {
        description: string,
        icon: string
      }
    ]
    ,
    wind: {
      deg: number,
      speed: number
    },
    sys:{
      country: string
    }
}