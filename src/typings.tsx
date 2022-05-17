// import { ReactElement } from "react";

// import { DOMElement } from "react";

interface DOMElement extends ReactElement {

}

interface ReactHTML {
  div: HTMLDivElement,
  span: HTMLSpanElement
}

interface DetailedReactHTMLElement extends DOMElement {
  type: keyof ReactHTML
}

interface ReactElement<P=any, T extends string = string> {
  type: T,
  props: P
}

type ReactText = string | number;

type ReactChild = ReactElement | ReactText;

type ReactNode = ReactChild | boolean | null | undefined

export declare function creatElement<P>(
  type:string, 
  props: P, 
  ...children: ReactNode[]
  ): ReactElement;