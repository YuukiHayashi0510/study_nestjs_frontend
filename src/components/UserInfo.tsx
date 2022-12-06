import { useQueryUser } from '~/hooks/useQueryUser'
import { Loader } from '@mantine/core'

const UserInfo = () => {
  // alias data: user
  const { data: user, status } = useQueryUser()

  if (status === 'loading') return <Loader />
  return <p>{user?.email}</p>
}

export default UserInfo
