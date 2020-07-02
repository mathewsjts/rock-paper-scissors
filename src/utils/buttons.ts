import IButton from "@/models/IButton";

const buttons: any = {
  rock: {
    name: 'rock',
    color: '#dd405d',
    hover: '#dc2e4e',
    icon: require('@/assets/img/icon-rock.svg'),
    beats: ['lizard', 'scissors']
  },
  paper: {
    name: 'paper',
    color: '#5671f5',
    hover: '#4865f4',
    icon: require('@/assets/img/icon-paper.svg'),
    beats: ['rock', 'spock']
  },
  scissors: {
    name: 'scissors',
    color: '#eca922',
    hover: '#ec9e0e',
    icon: require('@/assets/img/icon-scissors.svg'),
    beats: ['paper', 'lizard']
  },
  lizard: {
    name: 'lizard',
    color: '#8c5de5',
    hover: '#834fe3',
    icon: require('@/assets/img/icon-lizard.svg'),
    beats: ['spock', 'paper']
  },
  spock: {
    name: 'spock',
    color: '#52bed1',
    hover: '#40b9ce',
    icon: require('@/assets/img/icon-spock.svg'),
    beats: ['scissors', 'rock']
  }
}

export const selectRandom = (): IButton => {
  const keys: any = Object.keys(buttons)
  const random: number = keys.length * Math.random() << 0

  return buttons[keys[random]]
}

export default buttons
