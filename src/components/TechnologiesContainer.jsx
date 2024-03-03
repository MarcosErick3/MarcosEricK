import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiPhp,
    DiMysql,
    DiReact,
} from "react-icons/di";

import "../styles/components/technologiesContainer.sass";

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Sou proficiente em HTML5, a linguagem de marcação fundamental para o desenvolvimento web. Utilizo tags semânticas para criar estruturas claras e acessíveis." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Tenho experiência sólida em CSS3, utilizando estilos para criar layouts responsivos e atraentes. Trabalho com Flexbox e Grid para alcançar designs modernos." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Domino JavaScript e suas modernas bibliotecas e frameworks. Desenvolvo interatividade e dinamismo nas aplicações, garantindo uma experiência de usuário fluida." },
    { id: "php", name: "PHP", icon: <DiPhp />, description: "Com PHP, construo aplicações do lado do servidor robustas. Utilizo o PHP para criar páginas dinâmicas e interagir com bancos de dados, proporcionando funcionalidades avançadas aos meus projetos." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Tenho experiência em bancos de dados MySQL, projetando esquemas eficientes e escrevendo consultas otimizadas para garantir o armazenamento e recuperação eficazes de dados." },
    { id: "react", name: "React", icon: <DiReact />, description: "Sou especializado em React, criando interfaces de usuário modernas e reativas. Utilizo componentes reutilizáveis e gerenciamento de estado eficiente para construir aplicações robustas." },
];

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesContainer;
