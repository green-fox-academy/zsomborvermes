class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete() {
    this.completed = true;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  getName(): string {
    return this.name;
  }
}

export { Thing };