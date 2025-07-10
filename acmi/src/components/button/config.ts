const colors = {
  blue: {
    standard: 'bg-blue-500 hover:not-disabled:bg-blue-700 active:not-disabled:bg-blue-400',
    outline:
      'text-blue-500 border border-blue-500  hover:not-disabled:shadow-inner-glow-blue  active:not-disabled:shadow-inner-glow-active-blue',
    ghost: 'hover:not-disabled:bg-blue-500/20 active:not-disabled:bg-blue-500/30 ',
  },
  dark_blue: {
    standard: 'bg-blue-dark hover:not-disabled:bg-blue-deep active:not-disabled:bg-[#2c5783]',
    outline:
      'text-blue-dark border border-blue-dark hover:not-disabled:shadow-inner-glow  active:not-disabled:shadow-inner-glow-active',
    ghost: 'hover:not-disabled:bg-blue-dark/20 active:not-disabled:bg-blue-dark/30 ',
  },
  red: {
    standard: 'bg-red-600 hover:not-disabled:bg-blue-deep active:not-disabled:bg-red-300',
    outline:
      'text-red-600 border border-red-600 hover:not-disabled:shadow-inner-glow-red  active:not-disabled:shadow-inner-glow-active-red',
    ghost: 'hover:not-disabled:bg-red-600/20 active:not-disabled:bg-red-300/30 ',
  },
  orange: {
    standard:
      'bg-amber-500 hover:not-disabled:bg-amber-700 active:not-disabled:bg-amber-300 text-black',
    outline:
      'text-amber-500 border border-amber-500 hover:not-disabled:shadow-inner-glow-orange  active:not-disabled:shadow-inner-glow-active-orange ',
    ghost: 'hover:not-disabled:bg-amber-500/20 active:not-disabled:bg-amber-300/30 ',
  },
  green: {
    standard:
      'bg-green-500 hover:not-disabled:bg-green-700 active:not-disabled:bg-green-300 text-black',
    outline:
      'text-green-500 border border-green-500 hover:not-disabled:shadow-inner-glow-green  active:not-disabled:shadow-inner-glow-active-green',
    ghost: ' hover:not-disabled:bg-green-500/20 active:not-disabled:bg-green-300/30 ',
  },
};

export enum BtnColorType {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  ORANGE = 'orange',
  DARK_BLUE = 'dark_blue',
}

export const configButton = (colorType: BtnColorType) => {
  const { standard, outline, ghost } = colors[colorType];

  return {
    standard:
      `border text-white border-transparent disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-200 ease-in-out ` +
      standard,
    outline:
      `bg-transparent disabled:cursor-not-allowed disabled:opacity-60 transition-shadow duration-200 ease-in-out ` +
      outline,
    ghost:
      `bg-transparent rounded-xl border border-transparent disabled:cursor-not-allowed disabled:opacity-60 transition-colors duration-200 ease-in-out ` +
      ghost,
  };
};

export const configLoader = {
  standard: 'border-white',
  outline: 'border-blue-dark',
  ghost: 'border-blue-dark',
};
