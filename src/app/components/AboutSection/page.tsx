'use client';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export default function ContentSection() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div>
      {isLargeScreen && (
        <section className="flex my-5 flex-col items-center gap-10 justify-between h-full w-full">
          <Box className="flex flex-col items-center gap-5 justify-center">
            <Image className='pt-4' src="/product_mindset_logo 1 (Traced).png" alt="product mindset logo" width={400} height={500} />
            <Box className="flex flex-col items-center justify-center">
              <p className="text-justify w-1/2">O <strong>Product Mindset Instituto</strong> nasce com a missão de transformar a forma como empresas e profissionais enxergam o desenvolvimento de produtos, promovendo uma mentalidade voltada para inovação, eficiência e impacto real no mercado. Com uma abordagem fundamentada em metodologias ágeis, design thinking e estratégias de gestão de produtos, o instituto capacita líderes, times e organizações para alcançar excelência na entrega de valor.</p>
              <h2>📌 Visão</h2>
              <p className="text-justify w-1/2">Ser referência em ensino e consultoria sobre gestão de produtos ágeis, impulsionando a transformação digital de empresas e profissionais no Brasil e além.</p>

              <h2>🎯 Missão</h2>
              <p className="text-justify w-1/2">Capacitar profissionais e empresas na adoção do mindset de produto, promovendo conhecimento prático e estratégias eficazes para o desenvolvimento de soluções inovadoras e centradas no cliente.</p>
            </Box>
            <h2>💡 Valores</h2>
            <li className="flex flex-col gap-2">
              <ul>✅ Foco no Cliente – Criamos soluções que atendem às reais necessidades do mercado. </ul>
              <ul>✅ Aprendizado Contínuo – Valorizamos a evolução constante e a adaptação ao novo.</ul>
              <ul>✅ Inovação e Criatividade – Encorajamos a experimentação e o pensamento fora da caixa.</ul>
              <ul>✅ Colaboração – Trabalhamos juntos para alcançar melhores resultados. </ul>
              <ul>✅ Entrega de Valor – Buscamos impacto real e sustentável para produtos e serviços.</ul>
            </li>
          </Box>
          <Box className="flex flex-col items-center gap-5 justify-center">
            <p className='text-2xl'>Sobre o autor</p>
            <Image src="/autor.jpg" className='rounded-2xl' alt="product mindset logo" width={400} height={500} />
            <Box className="flex flex-col text-justify w-1/2 gap-5" component={'span'}>
              <p>António Quizila Adelino é um profissional de Tecnologia da Informação com mais de 20 anos de experiência em coordenação de equipes de TI, gestão de projetos tecnológicos e implementação de soluções inovadoras. Especialista em Gerenciamento de Produto de Software, António possui uma trajetória marcada pela liderança de equipes multifuncionais e pela entrega de projetos de alta qualidade, alinhados aos prazos e orçamentos estabelecidos.
              </p>
              <p>
                Com formação acadêmica sólida, António é pós-graduado em Software Product Management pela Universidade de Alberta (Canadá) e possui MBA em Engenharia de Software pela Faculdade Metropolitana do Estado de São Paulo. Sua graduação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá complementa sua base técnica e estratégica.
              </p>
              <p>
                Ao longo de sua carreira, António acumulou expertise em áreas como análise e levantamento de requisitos, design de arquitetura de sistemas, gestão ágil de projetos e controle de qualidade. Certificado em metodologias ágeis como Scrum, Kanban, SAFe e Management 3.0, ele é um entusiasta da inovação tecnológica e da melhoria contínua.
              </p>
              <p>
                Atuou em empresas de destaque, como AXÉ DRIVER, OFM Systems, SONDA IT e Ministério Público do Estado do Rio de Janeiro, onde liderou projetos complexos, desenvolveu estratégias de TI alinhadas aos objetivos de negócios e promoveu a adoção de práticas ágeis e colaborativas. Sua experiência inclui ainda a coordenação de operações de TI no Consulado Geral de Angola no Rio de Janeiro, onde supervisionou infraestrutura tecnológica e projetos estratégicos.
              </p>
              <p>
                É sócio e CTO da Axé Driver, empresa Du Negro LTD, e autor dos livros:
                "Necessidade do Cliente e Requisito de Software", e "Processo de Software e Práticas Ágeis",
                nos quais compartilha insights valiosos e práticos, frutos de sua vasta experiência no campo da tecnologia. Suas obras refletem seu compromisso com a excelência, a inovação e a entrega de soluções que realmente atendam às necessidades dos clientes.
              </p>
            </Box>
          </Box>
        </section>
      )}
      {(isSmallScreen || isMediumScreen) && (
        <section className="flex my-5 flex-col items-center gap-10 justify-between h-full w-full">
          <Box className="flex flex-col items-center gap-5 justify-center">
            <Image className='pt-4' src="/product_mindset_logo 1 (Traced).png" alt="product mindset logo" width={250} height={250} />
            <Box className="flex flex-col items-center gap-5 text-sm justify-center">
              <p className="text-justify w-4/5">O <strong>Product Mindset Instituto</strong> nasce com a missão de transformar a forma como empresas e profissionais enxergam o desenvolvimento de produtos, promovendo uma mentalidade voltada para inovação, eficiência e impacto real no mercado. Com uma abordagem fundamentada em metodologias ágeis, design thinking e estratégias de gestão de produtos, o instituto capacita líderes, times e organizações para alcançar excelência na entrega de valor.</p>
              <h2>📌 Visão</h2>
              <p className="text-justify w-4/5">Ser referência em ensino e consultoria sobre gestão de produtos ágeis, impulsionando a transformação digital de empresas e profissionais no Brasil e além.</p>

              <h2>🎯 Missão</h2>
              <p className="text-justify w-4/5">Capacitar profissionais e empresas na adoção do mindset de produto, promovendo conhecimento prático e estratégias eficazes para o desenvolvimento de soluções inovadoras e centradas no cliente.</p>
            </Box>
            <Box className="flex flex-col w-4/5 items-center gap-5 justify-center">
              <h2>💡 Valores</h2>
              <li className="flex flex-col text-sm gap-2">
                <ul>✅ Foco no Cliente – Criamos soluções que atendem às reais necessidades do mercado. </ul>
                <ul>✅ Aprendizado Contínuo – Valorizamos a evolução constante e a adaptação ao novo.</ul>
                <ul>✅ Inovação e Criatividade – Encorajamos a experimentação e o pensamento fora da caixa.</ul>
                <ul>✅ Colaboração – Trabalhamos juntos para alcançar melhores resultados. </ul>
                <ul>✅ Entrega de Valor – Buscamos impacto real e sustentável para produtos e serviços.</ul>
              </li>
            </Box>
          </Box>
          <Box className="flex flex-col items-center gap-5 justify-center">
            <p className='text-2xl'>Sobre o autor</p>
            <Image src="/autor.jpg" className='rounded-2xl' alt="product mindset logo" width={250} height={250} />
            <Box className="flex flex-col text-sm text-justify w-4/5 gap-5" component={'span'}>
              <p>António Quizila Adelino é um profissional de Tecnologia da Informação com mais de 20 anos de experiência em coordenação de equipes de TI, gestão de projetos tecnológicos e implementação de soluções inovadoras. Especialista em Gerenciamento de Produto de Software, António possui uma trajetória marcada pela liderança de equipes multifuncionais e pela entrega de projetos de alta qualidade, alinhados aos prazos e orçamentos estabelecidos.
              </p>
              <p>
                Com formação acadêmica sólida, António é pós-graduado em Software Product Management pela Universidade de Alberta (Canadá) e possui MBA em Engenharia de Software pela Faculdade Metropolitana do Estado de São Paulo. Sua graduação em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá complementa sua base técnica e estratégica.
              </p>
              <p>
                Ao longo de sua carreira, António acumulou expertise em áreas como análise e levantamento de requisitos, design de arquitetura de sistemas, gestão ágil de projetos e controle de qualidade. Certificado em metodologias ágeis como Scrum, Kanban, SAFe e Management 3.0, ele é um entusiasta da inovação tecnológica e da melhoria contínua.
              </p>
              <p>
                Atuou em empresas de destaque, como AXÉ DRIVER, OFM Systems, SONDA IT e Ministério Público do Estado do Rio de Janeiro, onde liderou projetos complexos, desenvolveu estratégias de TI alinhadas aos objetivos de negócios e promoveu a adoção de práticas ágeis e colaborativas. Sua experiência inclui ainda a coordenação de operações de TI no Consulado Geral de Angola no Rio de Janeiro, onde supervisionou infraestrutura tecnológica e projetos estratégicos.
              </p>
              <p>
                É sócio e CTO da Axé Driver, empresa Du Negro LTD, e autor dos livros:
                "Necessidade do Cliente e Requisito de Software", e "Processo de Software e Práticas Ágeis",
                nos quais compartilha insights valiosos e práticos, frutos de sua vasta experiência no campo da tecnologia. Suas obras refletem seu compromisso com a excelência, a inovação e a entrega de soluções que realmente atendam às necessidades dos clientes.
              </p>
            </Box>
          </Box>
        </section>
      )}
    </div>
  )
}