/*
Package org GENERATED BY gengo:enum
DON'T EDIT THIS FILE
*/
package org

import (
	bytes "bytes"
	driver "database/sql/driver"
	errors "errors"
	fmt "fmt"

	enumeration "github.com/octohelm/enumeration/pkg/enumeration"
	pkgscanner "github.com/octohelm/enumeration/pkg/scanner"
)

var InvalidType = errors.New("invalid Type")

func (Type) EnumValues() []any {
	return []any{
		TYPE__GOV, TYPE__COMPANY,
	}
}

func (v Type) MarshalText() ([]byte, error) {
	return []byte(v.String()), nil
}

func (v *Type) UnmarshalText(data []byte) error {
	vv, err := ParseTypeFromString(string(bytes.ToUpper(data)))
	if err != nil {
		return err
	}
	*v = vv
	return nil
}

func ParseTypeFromString(s string) (Type, error) {
	switch s {
	case "GOV":
		return TYPE__GOV, nil
	case "COMPANY":
		return TYPE__COMPANY, nil

	default:
		var i Type
		_, err := fmt.Sscanf(s, "UNKNOWN_%d", &i)
		if err == nil {
			return i, nil
		}
		return TYPE_UNKNOWN, InvalidType
	}
}

func (v Type) IsZero() bool {
	return v == TYPE_UNKNOWN
}

func (v Type) String() string {
	switch v {
	case TYPE__GOV:
		return "GOV"
	case TYPE__COMPANY:
		return "COMPANY"

	case TYPE_UNKNOWN:
		return "UNKNOWN"
	default:
		return fmt.Sprintf("UNKNOWN_%d", v)
	}
}

func ParseTypeLabelString(label string) (Type, error) {
	switch label {
	case "政府":
		return TYPE__GOV, nil
	case "企事业单位":
		return TYPE__COMPANY, nil

	default:
		return TYPE_UNKNOWN, InvalidType
	}
}

func (v Type) Label() string {
	switch v {
	case TYPE__GOV:
		return "政府"
	case TYPE__COMPANY:
		return "企事业单位"

	default:
		return fmt.Sprint(v)
	}
}

func (v Type) Value() (driver.Value, error) {
	offset := 0
	if o, ok := any(v).(enumeration.DriverValueOffset); ok {
		offset = o.Offset()
	}
	return int64(v) + int64(offset), nil
}

func (v *Type) Scan(src any) error {
	offset := 0
	if o, ok := any(v).(enumeration.DriverValueOffset); ok {
		offset = o.Offset()
	}

	i, err := pkgscanner.ScanIntEnumStringer(src, offset)
	if err != nil {
		return err
	}
	*v = Type(i)
	return nil
}
