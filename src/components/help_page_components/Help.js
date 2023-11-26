import { useEffect, useState } from 'react';
import CategoryAccordion from '../menu_page/CategoryAccordion';
import { HELP_SUPPORT_URL, proxyUrl } from '../../utils/constant';
import {
  HelpPageDataProvider,
  useData
} from '../../utils/contexts/HelpPageDataContext';

const Help = () => {
  return (
    <div className="bg-[#37718e] flex flex-col items-start p-10">
      <div className="mx-[20%]">
        <HelpHeader />
      </div>
      <div className="flex bg-white w-[70%] h-[100%] mx-[20%]">
        <HelpBody />
      </div>
    </div>
  );
};

const HelpHeader = () => {
  return (
    <div className="p-10 flex flex-col text-white">
      <span className="text-2xl font-bold">Help & Support</span>
      <span>Let's take a step ahead and help you better.</span>
    </div>
  );
};

const HelpLeftSection = () => {
  const { apiData, fetchData } = useData();
  const [helpLeftSectionElement, setHelpLeftSectionElement] = useState(null);

  useEffect(() => {
    setHelpLeftSectionElement(document.getElementById('help-left-section'));
  }, []);

  const partnerOnboardingHandler = (queryStr) => {
    helpLeftSectionElement.querySelectorAll('span').forEach((element) => {
      element.classList.remove('bg-white');
    });

    helpLeftSectionElement
      .querySelectorAll('span')[0]
      .classList.toggle('bg-white');
    fetchData(proxyUrl + HELP_SUPPORT_URL + queryStr + '?');
  };
  const legalHandler = (queryStr) => {
    helpLeftSectionElement.querySelectorAll('span').forEach((element) => {
      element.classList.remove('bg-white');
    });

    helpLeftSectionElement
      .querySelectorAll('span')[1]
      .classList.toggle('bg-white');
    fetchData(proxyUrl + HELP_SUPPORT_URL + queryStr + '?');
  };
  const faqHandler = (queryStr) => {
    helpLeftSectionElement.querySelectorAll('span').forEach((element) => {
      element.classList.remove('bg-white');
    });

    helpLeftSectionElement
      .querySelectorAll('span')[2]
      .classList.toggle('bg-white');
    fetchData(proxyUrl + HELP_SUPPORT_URL + queryStr + '?');
  };

  return (
    <div
      id="help-left-section"
      className="flex flex-col gap-6 p-5 bg-[#edf1f7]"
    >
      <span
        className="p-1 hover:text-black  hover:cursor-pointer bg-white"
        onClick={() => partnerOnboardingHandler('partner-onboarding')}
      >
        Partner Onboarding
      </span>
      <span
        className="p-1  hover:cursor-pointer"
        onClick={() => legalHandler('legal')}
      >
        {' '}
        Legal{' '}
      </span>
      <span
        className="p-1  hover:cursor-pointer"
        onClick={() => faqHandler('faq')}
      >
        FAQs
      </span>
    </div>
  );
};

const HelpBody = () => {
  return (
    <HelpPageDataProvider>
      <div className="p-5 bg-white flex">
        <HelpLeftSection />
        <QuestionAccordionContainer />
      </div>
    </HelpPageDataProvider>
  );
};

const QuestionAccordionContainer = () => {
  const { apiData, fetchData } = useData();

  useEffect(() => {
    fetchData(proxyUrl + HELP_SUPPORT_URL + 'partner-onboarding' + '?');
  }, []);
  return apiData === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className="w-[800px] p-5">
      <span className="my-8 p-5 font-bold text-xl ">
        {apiData.data.issues.meta.type}
      </span>

      {apiData &&
        apiData.data.issues.data.map((accordionQuestion) => {
          return (
            <QuestionAccordion
              key={accordionQuestion.title}
              accordionQuestion={accordionQuestion}
            />
          );
        })}
    </div>
  );
};

const QuestionAccordion = (props) => {
  const { title, description } = props.accordionQuestion;
  const [showAccordionItems, setShowAccordionItems] = useState(false);

  const accordionClickHandler = () => {
    setShowAccordionItems(!showAccordionItems);
  };
  return (
    <>
      <div
        className=" flex justify-between border border-b-black p-5 hover:cursor-pointer"
        onClick={accordionClickHandler}
      >
        <div>{title}</div>
        <span>🔽</span>
      </div>
      {showAccordionItems && <Description description={description} />}
    </>
  );
};

const Description = (props) => {
  const { description } = props;
  return (
    <div className="p-2 m-5">
      <span>{description}</span>
    </div>
  );
};

export default Help;
