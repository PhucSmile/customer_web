import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { z, ZodType } from 'zod';

export const RequiredString = z
  .string({
    invalid_type_error: 'Dữ liệu này không phải dạng chuỗi',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .min(1, 'Vui lòng không bỏ trống dữ liệu này')
  .regex(/(?!^\s+$)/, 'Chuỗi chỉ chứa khoảng trằng');
//.regex(/(.|\s)*\S(.|\s)*/, "Chuỗi chỉ chứa khoảng trằng");

export const OptionalString = z
  .string({
    invalid_type_error: 'Dữ liệu này không phải dạng chuỗi',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .regex(/(?!^\s+$)/, 'Chuỗi chỉ chứa khoảng trằng')
  .nullish()
  .optional();

export const RequiredUUID = RequiredString.uuid('Mã UUID không hợp lệ');

export const OptionalUUID = RequiredUUID.optional().or(z.literal(''));

export const NullableUUID = RequiredUUID.nullable().or(z.literal(''));

export const RequiredEmail = RequiredString.email(
  'Định dạng email không hợp lệ',
);

export const OptionalEmail = RequiredEmail.optional();

export const RequiredPhone = RequiredString.refine(
  (value) => isPossiblePhoneNumber(value, 'VN'),
  'Số điện thoại không hợp lệ',
);

export const OptionalPhone = OptionalString.refine(
  (value) => isPossiblePhoneNumber(value ?? '', 'VN'),
  'Số điện thoại không hợp lệ',
);

export const RequiredNumber = z.number({
  invalid_type_error: 'Dữ liệu này không phải dạng số',
  required_error: 'Vui lòng không bỏ trống dữ liệu này',
});

export const PositiveNumber = z
  .number({
    invalid_type_error: 'Dữ liệu này không phải dạng số',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .positive('Số này phải > 0');

export const PositiveIntegerNumber = z
  .number({
    invalid_type_error: 'Dữ liệu này không phải dạng số',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .int('Số này phải là số nguyên')
  .positive('Số này phải > 0');

export const NonNegativeNumber = z
  .number({
    invalid_type_error: 'Dữ liệu này không phải dạng số',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .nonnegative('Số phải >= 0');

export const NonNegativeIntegerNumber = z
  .number({
    invalid_type_error: 'Dữ liệu này không phải dạng số',
    required_error: 'Vui lòng không bỏ trống dữ liệu này',
  })
  .int('Số này phải là số nguyên')
  .nonnegative('Số này phải >= 0');

export const RequiredBoolean = z.boolean({
  invalid_type_error: 'Dữ liệu này không phải dạng nhị phân',
  required_error: 'Vui lòng không bỏ trống dữ liệu này',
});

export const RequiredArray = (elementType: ZodType) =>
  z.array(elementType).min(1, 'Vui lòng không bỏ trống dữ liệu này');

export const OptionalArray = (elementType: ZodType) =>
  z.array(elementType).optional();

export const RequiredDate = RequiredString.datetime({
  message: 'Dữ liệu này không phải dạng ngày',
  offset: true,
});

export const OptionalDate = RequiredDate.optional();

// export const RequiredMinDate = (minDate: Date | string, message?: string) =>
//   RequiredDate.refine((val) => new Date(val) > new Date(minDate), {
//     message:
//       message ??
//       `Ngày phải sau ${formatInTimeZone(
//         minDate as string,
//         Intl.DateTimeFormat().resolvedOptions().timeZone,
//         "dd/MM/yyyy (zzz)"
//       )}`,
//   });

// export const OptionalMinDate = (minDate: Date | string, message?: string) =>
//   RequiredDate.refine((val) => new Date(val) > new Date(minDate), {
//     message:
//       message ??
//       `Ngày phải sau ${formatInTimeZone(
//         minDate as string,
//         Intl.DateTimeFormat().resolvedOptions().timeZone,
//         "dd/MM/yyyy (zzz)"
//       )}`,
//   }).optional();

// export const RequiredMaxDate = (maxDate: Date | string, message?: string) =>
//   RequiredDate.refine((val) => new Date(val) < new Date(maxDate), {
//     message:
//       message ??
//       `Ngày phải trước ${formatInTimeZone(
//         maxDate as string,
//         Intl.DateTimeFormat().resolvedOptions().timeZone,
//         "dd/MM/yyyy (zzz)"
//       )}`,
//   });

// export const OptionalMaxDate = (maxDate: Date | string, message?: string) =>
//   RequiredDate.refine((val) => new Date(val) < new Date(maxDate), {
//     message:
//       message ??
//       `Ngày phải trước ${formatInTimeZone(
//         maxDate as string,
//         Intl.DateTimeFormat().resolvedOptions().timeZone,
//         "dd/MM/yyyy (zzz)"
//       )}`,
//   }).optional();
