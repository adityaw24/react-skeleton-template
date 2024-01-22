import { Card, PageTitle } from "~/components"
import useAuthStore from "~/stores/auth-store"

function HomePage () {
	const username = useAuthStore(state => state.user.username)

	return <>
		<PageTitle title="Homepage" />
		<Card>
			This is home, Hi {username}
		</Card>
	</>
}

export default HomePage