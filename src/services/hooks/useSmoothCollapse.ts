import { useEffect } from "react";

// to use the hook, give the element an explicit line-height
const useSmoothCollapse = (Element: HTMLElement | null, isCollapsed: boolean, numOfDisplayedRows: number): void => {

  useEffect(() => {
    if (Element) {
      const styles = getComputedStyle(Element)
      if (isCollapsed) {
        Element.style.height = `calc(${styles.lineHeight} * ${numOfDisplayedRows})`;
      } else {
        Element.style.height = `${Element.scrollHeight}px`;
      }
    }
  }, [isCollapsed, Element, numOfDisplayedRows])

  useEffect(() => {
    const handleResize = () => {
      if (Element) {
        const styles = getComputedStyle(Element)
        if (isCollapsed) {
          Element.style.height = `calc(${styles.lineHeight} * ${numOfDisplayedRows})`;
        } else {
          Element.removeAttribute('style')
          Element.style.height = `${Element.scrollHeight}px`;
        }
      }
      console.log('+')
    }

    if (Element) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [Element, isCollapsed, numOfDisplayedRows])
}

export default useSmoothCollapse;
