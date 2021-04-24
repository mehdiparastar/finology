import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';

const Logo = ({ width = 45, height = 70 }) => {
  const theme = useTheme();
  const colorPrimaryMain = theme.palette.primary.main;
  const colorPrimaryDark = theme.palette.primary.main;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 95 71"

      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"      
      enableBackground="new 0 0 98 85"
      xmlSpace="preserve"
    >
      <image id="image0"
        width="98"
        height="85"
        x="0"
        y="0"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABVCAMAAACFBMEpAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABR1BMVEUAAAAAz/8A0/8A1/8A
2P8A1P8Az/8A1/8A1/8A1/8A2P8A2P8A1/8A2P8A2P8A1v8A1/////////////////8V2v//////
//////////////8A1v////8A1P////////////8A1v8A1/////////8A1/////+2n9j/icj/isj/
h8f/icf/////gM//mtD/h8f/isj/isX/isj/icf/icj/isn/h8f/i8j/i8j/isf/icYA1/////9A
4f9w6P+/9f8gzfgQ0/vv/P8Q2f8wyPVwteevotnflM//isjvj8y/ndaPrOBQv+5g5v9/sOSfp91A
w/Kw8/9guupvtecgzvivotqf8P+Q7f+Pq+Dvj8v/0+rPmdL/mc+AsOT/p9ZAxPL/+PyQrOD/2+7/
veD/oNOAsOP/mM/fk8+fp9z/zOf/ksz/xOP/zOYl65XiAAAAO3RSTlMAIEC/72AQn98gb49/r89Q
QEBwgGC/v39vIO+QnzDfEFCwYM+vgJBw358ggDAQ30DfMO+gcM9gz79gUFppBtwAAAABYktHRBHi
tT26AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQWDAkveabxZgAAAtFJREFUaN7t2Olf
0zAYB/DBytYN5JC6WZ3zRmXigHlh4lEEGxRRcd4HeJ///2u72W3tmid5kqYffbHf+/bL80tS2uVy
/3/GxrK9/3jeIoTkJzIDCkUSxi5lNIJN+rEyGaRMYpksmAZKeTIU02WNWySZKYNAYZJwc8DYIKVp
AsSeMSOULQLHRFmDwwAMkrqs6GHgJ+0RKcuAToopjkjyMJgua8bCCdqrDh0GfnSOCHwYgLKUj0gZ
X5JeWbLDYGDVFUvSMKb0hOBfLnqldQVCZpHEhD5RlN997uD8vHNIn7ClQIV2clOfIBKhSmlawhIL
h0OB3tInpoWCe6RH3OZdfCeIJyWOColaT6Drd+PXbWze81k3W/cfbAudY8Ih6CAPIxd5O+Ht+3n0
GBTEG6oeIZ5EgC2WjL+r05MTEQZNPeUB3UnaXGJWIByPDtHbtt4zBsbfVu2pGhPo884FbZ+JspMk
RI8PNy50m5IIPEPUU22ICJqSCklD1NOJYYG+8OQCY5v4nuoJYv0lQmCv2tienIRAX2MExt4ge3KT
Q9C3OCJWlaCnmvYQQVUepieX6g/B2Lu+YGUzRDAGoifOWtP3eILt9Qj4hZOz1vsKAvsg7anKGeKj
CuGHxEmVDUs/qRAs3FOnFNZabSkY2/hLQB9jvA1L6WclYlfc02kuoSSEBxzqyaEGiC/CnurGCOit
v0qNEUBPLiDQr+rLDXweORChtqP2BO9PZyBC+ejZ0GJXIELhQcvYt+B1HPyKBKdQegx+t87Cv7Is
QITSE+Sc6GecOZD4gRfO54QBF2P/J5q4ICbgMX6hiUUxAZ8M9BiNnCwXgacU/Y1ciSUpEbzOLlS4
uYQimggBzOKykZqEWVmVCq10AsJILQTGctaCZD0umxCCNMDdmmovxQdp8YDVlFtJilxpYA6cUpau
tq71//7rDXMVDTErzbW1G03ZQ2+UUUb5d/kDMLbsC3oBRxsAAAAldEVYdGRhdGU6Y3JlYXRlADIw
MjEtMDQtMjJUMTI6MDk6NDcrMDM6MDDzXloZAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTIy
VDEyOjA5OjQ3KzAzOjAwggPipQAAAABJRU5ErkJggg=="
      />
    </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width}
    //   height={height}
    //   fill="none"
    //   viewBox="0 0 95 71"
    // >
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="0.664"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 .664 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="68.926"
    //     x="28.665"
    //     y="7.769"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.406"
    //     transform="rotate(-25 28.665 7.77)"
    //   ></rect>
    //   <rect
    //     width="16.811"
    //     height="16.81"
    //     x="78.769"
    //     y="0.664"
    //     fill={colorPrimaryMain}
    //     stroke={colorPrimaryDark}
    //     rx="8.405"
    //     transform="rotate(25 78.77 .664)"
    //   ></rect>
    // </svg>
  );
};

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Logo;
