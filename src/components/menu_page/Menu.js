import MenuHeader from './MenuHeader';
import CategoryAccordion from './CategoryAccordion';
const Menu = () => {
  return (
    <div className="md:mx-[20wh] lg:mx-[25vw] flex-col">
      <MenuHeader />
      <CategoryAccordion />
    </div>
  );
};

export default Menu;
