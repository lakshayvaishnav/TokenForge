import React, { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuArrowRightFromLine } from "react-icons/lu";

export const ToolView: FC = ({
  // @ts-ignore
  setOpenAirdrop,
  // @ts-ignore
  setOpenContact,
  // @ts-ignore
  setOpenCreateModal,
  // @ts-ignore
  setOpenSendTransaction,
  // @ts-ignore
  setOpenTokenMetaData,
}) => {
  const tools = [
    {
      name: "Create Token",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },

    {
      name: "Token Metadata",
      icon: <MdGeneratingTokens />,
      function: setOpenTokenMetaData,
    },

    {
      name: "Contact Us",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },

    {
      name: "AirDrop",
      icon: <MdGeneratingTokens />,
      function: setOpenAirdrop,
    },

    {
      name: "Send Transactio",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },

    {
      name: "Buddy Token",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Top Token",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Solana Explorer",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
  ];
  return (
    <section id="tools" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Solana Powerful Tools
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              rerum vitae cupiditate, corporis beatae ex modi quas dolorem sit
              <br />
              tempore fugit magni sapiente? Hic optio alias odit et? Dolorum,
              officiis.
            </p>
          </div>
        </div>

        <div className="gird gap-6  sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              className="bg-default-950/40 rounded-xl backdrop-blur-3xl"
              onClick={() => tool.function(true)}
            >
              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`inline-flex h-10  w-10 items-center justify-center rounded-lg bg-red-500/20 ${
                      index == 0
                        ? "text-red-500"
                        : index == 1
                        ? "text-sky-500"
                        : index == 2
                        ? "text-indigo-500"
                        : index == 3
                        ? "text-yellow-500"
                        : "text-teal-500"
                    }`}
                  >
                    <i data-lucide="dribble" className="">
                      {tool.icon}
                    </i>
                  </div>

                  <h3 className="text-default-200 text-xl font-medium ">
                    {tool.name}
                  </h3>
                </div>

                <a
                  className="text-primary group relative inline-flex items-center
                    gap-2"
                >
                  <span
                    className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded
                  transition-all duration-500 group-hover:w-full"
                  ></span>
                  Select & Try
                  <i data-lucide={"move-right"}>
                    <LuArrowRightFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            className="hover:bg-primary-hover bg-primary inline-flex items-center justify-center
          gap-2 rounded-full px-6 py-2 text-white transition-all duration-500"
          >
            More Tools
            <i>
              <IoIosArrowRoundForward />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};
