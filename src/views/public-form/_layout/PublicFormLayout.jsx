import { Outlet } from "react-router-dom";

function PublicFormLayout () {
	return <div className="flex items-center min-h-screen lg:p-6 p-3">
		<Outlet />
	</div>
}

export default PublicFormLayout