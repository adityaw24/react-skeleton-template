import { createBrowserRouter } from "react-router-dom"
import adminRoutes from "./adminRoutes"
import authRoutes from "./authRoutes"
import publicFormRoutes from "./publicFormRoutes"

const router = createBrowserRouter([
	...adminRoutes,
	...authRoutes,
	...publicFormRoutes
])

export default router