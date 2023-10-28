import Clock from "./deps/clock.js";
import View from "./view.js";

const worker = new Worker("./src/worker/worker.js", {
	type: "module",
});

const view = new View();
const clock = new Clock();

worker.onmessage = ({ data }) => {
	if (data.status !== "done") return;
	clock.stop();
	view.updateElapsedTime(`Process took ${took.replace("ago", "")}`);

	// Function to download file and test upload service;
	if (!data.buffers) return;
	view.downloadBlobAsFile(data.buffers, data.filename);
};

let took = "";
view.configureOnFileChange((file) => {
	const canvas = view.getCanvas();
	worker.postMessage(
		{
			file,
			canvas,
		},
		[canvas]
	);

	clock.start((time) => {
		took = time;
		view.updateElapsedTime(`Process started ${time}`);
	});
});

// Função ṕara simular selecao do arquivo
// async function fakeFetch() {
// 	const filePath = "/videos/frag_bunny.mp4";
// 	const response = await fetch(filePath);

// 	// Traz o tamanho do arquivo!
// 	//   const response = await fetch(filePath, {
// 	//     method: "HEAD",
// 	//   });
// 	// response.headers.get('content-length');
// 	// debugger

// 	// Simula o processo de geração do arquivo após selecionado no html
// 	const file = new File([await response.blob()], filePath, {
// 		type: "video/mp4",
// 		lastModified: Date.now(),
// 	});

// 	// Cria o evento de change no input
// 	const event = new Event("change");
// 	// Cria a propriedade target dentro do evento e seta o valor da propriedade com o arquivo
// 	Reflect.defineProperty(event, "target", { value: { files: [file] } });

// 	// Dispara o evento criado com o arquivo já carregado dentro da div de upload
// 	document.getElementById("fileUpload").dispatchEvent(event);
// }

// fakeFetch();
