import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Link.module.css';

interface CustomLinkProps extends NavLinkProps {
  label: string;
}

export const Link: React.FC<CustomLinkProps> = ({ label, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ''}`
      }
    >
      {label}
    </NavLink>
  );
};