import PublicFormLayout from "~/views/public-form/_layout/PublicFormLayout"
import FormExamplePage from "~/views/public-form/form-example/FormExamplePage"

const publicFormRoutes = [
	{ element: <PublicFormLayout />, path: '/public-form', children: [
		{ path: 'form-example', element: <FormExamplePage /> },
	]}
]

export default publicFormRoutes