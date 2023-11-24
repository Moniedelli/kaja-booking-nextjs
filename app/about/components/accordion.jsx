
'use client';

import { Accordion } from 'flowbite-react';

const AboutPages = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>What is KAJA?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Mt Batur trekking will give you the fantastic view of the sunrise. The peak of Mt batur is considered as one of the best spot for its sunrise view in this island. The combination of the sunrise and the surrounding are very perfect. The floating white clouds above the Lake Batur ,mt. Abang, Mt Agung and Mt rinjani in Lombok Island are completing the majestic view of the sunrise.The trekking will start at Toya Bungkah at around 4.00am with a professional local guide. It will be approximately 2 hours to reach the summit. At 5.30 from top, everyone must be ready with the camera since the arising sun will fascinate your eyes with an outstanding view…don’t miss this special moment!!! 
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          The Black Lava field and the Black Sand are two places of interest with are close to each other. Those places are very popular and unique.. The Black Lava is the frozen lava field from the eruption in the year of 1883 and 1963 and known as the only one ever found in the southeast Asia. The 4WD jeep adventure team is ready to serve you with their open air 4WD jeep driving through a narrow off-road trek along side the black lava field. This adventure activity is very safe and easy.Taking picture with the background of black lava and Mt. Batur is what most visitors love to do. After the Black lava, the adventure trip will continue to the next destination which is the Black sand. The black sand dune is very beautiful place and unique. The  black volcanic sand is rough, not like the soft black sands on the beach. It is a nice place to take pictures or just to relax enjoying the natural beauty of Mt. Batur.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default AboutPages;