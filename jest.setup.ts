import '@testing-library/jest-dom';

if (window.customElements) {
  jest.spyOn(window.customElements, 'define').mockImplementation(jest.fn());
  jest.spyOn(window.customElements, 'get').mockImplementation(jest.fn());
  jest.spyOn(window.customElements, 'whenDefined').mockImplementation(jest.fn());
}

class MockResizeObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
}
window.ResizeObserver = MockResizeObserver as any;

class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor() {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
window.IntersectionObserver = MockIntersectionObserver as any;

declare global {
  interface Window {
    ResizeObserver: typeof MockResizeObserver;
    IntersectionObserver: typeof MockIntersectionObserver;
  }
} 