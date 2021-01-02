import React from 'react';
import { Title, Form, Repositories } from './styles';
import logo from '../../assets/icon-github.svg';
import Repository from '../Repository';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return(
    <>
    <img src={logo} alt="github icon"/>
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite Aqui"></input>
      <button type="submit">Search</button>
    </Form>

    <Repositories>
      <a href="#">
        <img src="https://avatars0.githubusercontent.com/u/1902272?s=400&u=1289cb8dec14048196f079a6ac9501e9e62405c9&v=4" alt="Repository Owner Image"/>
        <div>
          <strong>wilkmaia/adventofcode</strong>
          <p>Cool Description goes here!!!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img src="https://avatars2.githubusercontent.com/u/30028621?s=460&u=43b301466a4f76d6b4c810e810403eacfe1f0724&v=4" alt="Repository Owner Image"/>
        <div>
          <strong>luchiago/dev-radar</strong>
          <p>Cool Description goes here!!!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img src="https://avatars0.githubusercontent.com/u/9610091?s=460&u=7bb359a684b0a61e41b075f2021a07ee01076059&v=4" alt="Repository Owner Image"/>
        <div>
          <strong>anapaulamendes/to-do-list</strong>
          <p>Cool Description goes here!!!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="#">
        <img src="https://avatars2.githubusercontent.com/u/8514920?s=400&u=611659b0ab608a41adc9616b298ffc971145d217&v=4" alt="Repository Owner Image"/>
        <div>
          <strong>marclerodrigues/headhunter42</strong>
          <p>Cool Description goes here!!!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
    </>
  )
};

export default Dashboard;