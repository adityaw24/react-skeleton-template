import { createBrowserRouter } from "react-router-dom"
import adminRoutes from "./adminRoutes"
import authRoutes from "./authRoutes"

const router = createBrowserRouter([
	...adminRoutes,
	...authRoutes,
])

export default router