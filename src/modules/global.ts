export function elevationShadowStyle(elevation:number ) {
    return {
      elevation:elevation,
      shadowColor: 'black',
      shadowOffset: {width: 5, height: 0.5 * elevation},
      shadowOpacity: 3,
      opacity:1,
      shadowRadius: 0.8 * elevation,
    };
}