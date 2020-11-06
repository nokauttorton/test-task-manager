export default {
  methods: {
    randomizeColor() {
      const max = 6 // всего 7 цветов
      const min = 0
      const random = Math.floor(Math.random() * (max - min) + min)
      const colors = [
        'DCAF3A', // желтый
        '3A4ADC', // синий
        '117557', // зеленый
        'B10913', // красный
        '8E3786', // фиолетовый
        '38A7CA', // голубой
        '806B57' // коричневый
      ]
      return colors[random]
    }
  }
}