class Todo {
  id: string;
  text: string;
  constructor(tod0Text: string) {
    this.id = new Date().toISOString();
    this.text = tod0Text;
  }
}

export default Todo;
