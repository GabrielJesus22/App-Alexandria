'use client'
import Image from "next/image";
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import { useState, useEffect } from 'react'
import { getBooksSuggestions } from '../APIs/getBooks'

export default function Home() {

  return (
    <p className="grid">Page 1</p>
  );
}
