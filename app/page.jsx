export default function Home() {
  return (
    <main className="">
      <div id="app">
        <div id="chat_container"></div>
        <form>
          <textarea
            name="prompt"
            rows="1"
            cols="1"
            placeholder="Ask ChatGPT..."
          ></textarea>
          <button>
            <img src="assets/send.svg" />
          </button>
        </form>
      </div>
    </main>
  );
}
