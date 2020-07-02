import IButton from "@/models/IButton";

const buttons: any = {
  'no-type': {
    name: 'no-type',
    active: false,
    bonus: false,
    color: 'transparent',
    hover: 'transparent',
    icon: null,
    beats: []
  },
  rock: {
    name: 'rock',
    active: true,
    bonus: false,
    color: '#dd405d',
    hover: '#dc2e4e',
    icon: require('@/assets/img/icon-rock.svg'),
    beats: ['lizard', 'scissors']
  },
  paper: {
    name: 'paper',
    active: true,
    bonus: false,
    color: '#5671f5',
    hover: '#4865f4',
    icon: require('@/assets/img/icon-paper.svg'),
    beats: ['rock', 'spock']
  },
  scissors: {
    name: 'scissors',
    active: true,
    bonus: false,
    color: '#eca922',
    hover: '#ec9e0e',
    icon: require('@/assets/img/icon-scissors.svg'),
    beats: ['paper', 'lizard']
  },
  lizard: {
    name: 'lizard',
    active: true,
    bonus: true,
    color: '#8c5de5',
    hover: '#834fe3',
    icon: require('@/assets/img/icon-lizard.svg'),
    beats: ['spock', 'paper']
  },
  spock: {
    name: 'spock',
    active: true,
    bonus: true,
    color: '#52bed1',
    hover: '#40b9ce',
    icon: require('@/assets/img/icon-spock.svg'),
    beats: ['scissors', 'rock']
  }
}

const getRndInteger = (max: number) => {
  return Math.floor(Math.random() * max);
}

export const selectRandom = (bonus: boolean): IButton => {
  const buttonsArray = Object.keys(buttons).map((k: string) => buttons[k])
  const normalButtons = buttonsArray.filter((b: any) => b.active && !b.bonus)
  const bonusButtons = buttonsArray.filter((b: any) => b.active)

  let random: any

  if (bonus) {
    const randomIndex = getRndInteger(bonusButtons.length)
    random = bonusButtons[randomIndex]
  } else {
    const randomIndex = getRndInteger(normalButtons.length)
    random = normalButtons[randomIndex]
  }

  return random
}

export default buttons
