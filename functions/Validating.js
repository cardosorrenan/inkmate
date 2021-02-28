/* RULES (FRONT)
    1 - Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros
    2 - O total de área das portas e janelas deve ser no máximo 50% da área de parede
    3 - A altura da parede deve ser, no mínimo, 30 centímetros maior que a altura da porta.
    4 - Cada janela possui as medidas: 2,00 m x 1,20 m
    5 - Cada porta possui as medidas: 0,80 m x 1,90 m

*/

const notPassMessage2 = 'The total area of doors and windows must be a maximum of 50% of the wall area'
const notPassMessage3 = 'The height of the wall must be at least 30 cm greater than the height of the door'

export default {
  validatingEntriesWall: (wall) => {
    const lengthWindow = 1.2
    const heightWindow = 2.0
    const lengthDoor = 0.8
    const heightDoor = 1.9
    const areaDoor = wall.numDoors * (lengthDoor * heightDoor)
    const areaWindow = wall.numWindows * (lengthWindow * heightWindow)
    const areaWall = wall.lengthWall * wall.heightWall
    const validations = []
    // RULE 2
    const hasWindowOrDoor = wall.numDoors > 0 || wall.numWindows > 0
    validations.push(hasWindowOrDoor && (areaDoor + areaWindow) >= areaWall * 0.5
      ? { message: notPassMessage2 }
      : false
    )
    // RULE 3
    validations.push(wall.numDoors > 0 && wall.heightWall < (heightDoor + 0.3)
      ? { message: notPassMessage3 }
      : false
    )
    const alerts = validations.filter(v => v)
    return alerts
  }
}
