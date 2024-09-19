import "./App.css" // importa os estilos personalizados para o App
import "antd/dist/reset.css" // importa os estilos reset do Ant Design
import { Layout, Form } from "antd" // importa componentes Layout e Form do Ant Design

import { Header } from "./components/header/Header" // importa o componente Header
import { CharacterList } from "./components/character-list/CharacterList" // importa o componente CharacterList
import { AddCharacterForm } from "./components/add-character-form/AddCharacterForm" // importa o componente AddCharacterForm
import { Input } from "./components/input/Input" // importa o componente Input
import { Button } from "./components/button/Button" // importa o componente Button
import { Footer } from "./components/footer/Footer" // importa o componente Footer

import { useCharacterManager } from "./hooks/useCharacterManager" // importa o hook customizado para gerenciamento de personagens

const { Content } = Layout // desestrutura o componente Content do Layout

function App() {
  // cria uma instância do Form do Ant Design para gerenciamento do formulário
  const [form] = Form.useForm()

  // usa o hook useCharacterManager para obter os dados e funções relacionados aos personagens
  const { characters, loading, addCharacter } = useCharacterManager()

  // função chamada quando o formulário é enviado com sucesso
  const handleFinish = (values) => {
    const newName = values.characterName // pega o nome do personagem do formulário

    // chama a função addCharacter e depois que ela é concluída limpa os campos do formulário
    addCharacter(newName).then(() => {
      form.resetFields() // limpa os campos do formulário
    })
  }

  return (
    <Layout className="layout"> {/* layout principal */}
      <Header /> {/* componente Header */}
      <Layout>
        <Layout>
          <Content className="content"> {/* conteúdo */}
            <AddCharacterForm form={form} onFinish={handleFinish}> {/* componente de formulário para adicionar personagens */}              
              <Form.Item
                name="characterName" // nome do campo do formulário
                rules={[{ required: true, message: "Please enter a character name!" }]} // regras de validação do formulário
              >                
                <Input placeholder="Enter character name" />
                {/* campo de input para o nome do personagem */}
              </Form.Item>              
              <Form.Item>
                <Button type="primary" htmlType="submit"> {/* botão para enviar o formulário */}
                  Add Character
                </Button>
              </Form.Item>
            </AddCharacterForm>
            <CharacterList characters={characters} loading={loading} /> {/* componente para listar os personagens */}
          </Content>
        </Layout>
      </Layout>
      <Footer /> {/* componente Footer */}
    </Layout>
  )
}

export default App
