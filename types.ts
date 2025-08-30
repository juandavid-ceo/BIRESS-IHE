import React from 'react';

export interface Service {
  title: string;
  description: string[];
  benefit: string;
  icon: React.ReactNode;
}

export interface FocusPoint {
  title: string;
  icon: React.ReactNode;
}
