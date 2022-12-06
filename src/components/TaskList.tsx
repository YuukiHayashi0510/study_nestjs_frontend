import { useQueryTasks } from '~/hooks/useQueryTasks'
import { List, ThemeIcon, Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import TaskItem from '~/components/TaskItem'

const TaskList = () => {
  const { data: tasks, status } = useQueryTasks()
  if (status === 'loading') return <Loader />
  return (
    <List
      my='lg'
      spacing='sm'
      size='sm'
      icon={
        <ThemeIcon color='cyan' size={24} radius='xl'>
          <IconCircleDashed size={16} />
        </ThemeIcon>
      }
    >
      {tasks?.map((task) => {
        return (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
          />
        )
      })}
    </List>
  )
}

export default TaskList
