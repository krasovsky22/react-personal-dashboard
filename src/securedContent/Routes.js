import DashboardContainer from '~securedContent/dashboard/DashboardContainer'
import DashboardWithId from '~securedContent/DashboardWithId'
import ProfileComponent from '~securedContent/profile/ProfileComponent'
import GoogleMapContainer from '~securedContent/googleMap/GoogleMapContainer'

const Routes = {
  dashboard: [
    {
      path: '/dashboard/main',
      name: 'Dashboard',
      Component: DashboardContainer
    },
    {
      path: '/dashboard/main/:id',
      name: 'Dashboard',
      Component: DashboardWithId
    }
  ],

  googleMap: [
    {
      path: '/dashboard/googleMap',
      name: 'Google Map',
      Component: GoogleMapContainer
    }
  ],

  profile: [
    {
      path: '/dashboard/profile',
      name: 'Profile',
      Component: ProfileComponent
    }
  ]
}

export function * RoutesValues (obj) {
  // for (let prop in obj)
  for (let prop of Object.keys(obj)) // own properties, you might use
    yield obj[prop][0]
}

export default Routes
