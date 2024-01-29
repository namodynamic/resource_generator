'use client'

import { Fragment } from "react";
import TemplateComponent from "react-mustache-template-component";

const ElderlyTemplate = () => {
    const template = `<img class="w-[585px] h-[759px]" src="{{url}}" />`;
    const data = { url: "/lettertemplate.jpg" };
    return (
      <Fragment>
        <TemplateComponent template={template} data={data} type={'div'}/>
      </Fragment>
    );
  };

export default ElderlyTemplate