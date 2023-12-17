// global_scope.ts

// Biến toàn cục
let globalVariable: string = "I am a global variable";

export function getGlobalVariable(): string {
  return globalVariable;
}

export function setGlobalVariable(newValue: string): void {
  globalVariable = newValue;
}
