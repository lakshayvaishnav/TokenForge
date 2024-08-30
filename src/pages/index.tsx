import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// internal import
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetadataView,
  ContactView,
  AirdropView,
  DonateView,
  InputView,
} from "../views";

const Home: NextPage = (props) => {
  // state variable
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [opnenAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);

  return (
    <>
      <Head>
        <title>Solana Token Creator</title>
        <meta
          name="solana token creator"
          content="Build and create solana token"
        />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        // @ts-ignore
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />
      <FeatureView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
      />
      {/* <OfferView />

      <FaqView />

      {openCreateModal && (
        <div className="new_laoder relative h-full bg-slate-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}

      {openTokenMetaData && (
        <div className="new_laoder relative h-full bg-slate-900">
          <TokenMetadataView setOpenTokenMetaData={setOpenTokenMetaData} />
        </div>
      )}

      {openContact && (
        <div className="new_laoder relative h-full bg-slate-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      )}

      {opnenAirdrop && (
        <div className="new_laoder relative h-full bg-slate-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}

      {openSendTransaction && (
        <div className="new_laoder relative h-full bg-slate-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )} */}
    </>
  );
};

export default Home;
