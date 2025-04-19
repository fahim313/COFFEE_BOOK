import Heading from "../Components/Heading/Heading"

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-start justify-center pt-60">
      <Heading
        title='Welcome to Dashboard'
        subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.'
      />
    </div>
  )
}

export default Dashboard
