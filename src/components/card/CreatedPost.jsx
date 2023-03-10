import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { createPostSchema } from '../../../modules/post/post.schema'

import Text from '../inputs/Textarea'
import Title from '../inputs/InputTitle'
import Button from '../button/Button'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const StyledForm = styled.form`
  background-color: ${(props) => props.theme.white};
  width: 530.17px;
  border-radius: 3px;

  @media (max-width: 600px) {
    border-radius: 25px;
  }
`

const CreatedPost = () => {
  const { control, handleSubmit } = useForm({
    resolver: joiResolver(createPostSchema)
  })
  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(handleForm)}>
        <Title placeholder="Título" name="title" control={control} />
        <Text placeholder="Sua tarefa" name="textArea" control={control} />
        <Button type="submit">Salvar</Button>
      </StyledForm>
    </StyledContainer>
  )
}

export default CreatedPost
