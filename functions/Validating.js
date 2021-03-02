/* RULES (FRONT)
    1 - Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros
    2 - O total de área das portas e janelas deve ser no máximo 50% da área de parede
    3 - A altura da parede deve ser, no mínimo, 30 centímetros maior que a altura da porta.
    4 - Cada janela possui as medidas: 2,00 m x 1,20 m
    5 - Cada porta possui as medidas: 0,80 m x 1,90 m
*/

const alertMessageRule2 = 'The total area of doors and windows must be a maximum of 50% of the wall area'
const alertMessageRule3 = 'The height of the wall must be at least 30 cm greater than the height of the door'
const lengthWindow = 2.0
const heightWindow = 1.2
const lengthDoor = 0.8
const heightDoor = 1.9

export default {
  validatingEntriesWall: ({ lengthWall, heightWall, numDoors, numWindows }) => {
    const areaDoor = numDoors * lengthDoor * heightDoor
    const areaWindow = numWindows * lengthWindow * heightWindow
    const areaWall = lengthWall * heightWall
    const validations = []
    // Rule 2
    const hasWindowOrDoor = numDoors > 0 || numWindows > 0
    const rule2 = (areaDoor + areaWindow) >= (areaWall * 0.5)
    const resultRule2 = (hasWindowOrDoor && rule2)
      ? { message: alertMessageRule2 }
      : { message: 'pass' }
    validations.push(resultRule2)
    // Rule 3
    const hasDoor = numDoors > 0
    const rule3 = heightWall < (heightDoor + 0.3)
    const resultRule3 = (hasDoor && rule3)
      ? { message: alertMessageRule3 }
      : { message: 'pass' }
    validations.push(resultRule3)
    // Get alerts
    const alerts = validations.filter(val => val.message !== 'pass')
    return alerts
  }
}
