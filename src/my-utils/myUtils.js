class MyUtils {
  constructor(props) {

    /**
     * Breakpoints utilizados por bootstrap
     */
    this.breakPoints = {
      "xl": d => d >= 1200,
      "lg": d => d >= 992,
      "md": d => d >= 768,
      "sm": d => d >= 576,
      "xs": d => d < 576
    };

    this.getBreakPoint = this.getBreakPoint.bind(this);
  }

  /**
   * Retorna el breakpoint acutal
   */
  getBreakPoint() {
    let currentWidth = window.innerWidth;
    let breakPoints = this.breakPoints;

    let retorno = Object
      .keys(breakPoints)
      .find(d => breakPoints[d](currentWidth))

    return { label: retorno, fn: breakPoints[retorno] };
  }
}

export default MyUtils;