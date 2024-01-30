import { Toaster } from 'react-hot-toast'
import { RouterProvider } from "react-router-dom"
import router from "./router"

function App() {
	return <>
		<RouterProvider router={router} />
		<Toaster
			position="top-right"
			toastOptions={{
				className: "ring ring-base-300 !bg-base-100/40 !backdrop-blur !text-base-content",
			}}
		/>
	</>
}

export default App