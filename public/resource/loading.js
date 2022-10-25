/**
 * 初始化加载效果的svg格式logo
 * @param {string} id - 元素id
 */

function initSvgLogo(id) {
    const svgStr = `<svg enable-background="new 0 0 128 128" height="128" version="1.1" viewBox="0 0 32 32" width="128"
    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="pinterest" />
    <g id="youtube" />
    <g id="whatsapp" />
    <g id="instagram" />
    <g id="tiktok" />
    <g id="rss" />
    <g id="twitter" />
    <g id="facebook" />
    <g id="inbox" />
    <g id="discord">
        <g>
            <path clip-rule="evenodd"
                d="M9.197,22.768c0.045,0.015,0.089,0.034,0.134,0.052    c0.41,0.17,0.823,0.335,1.242,0.482l0,0c0.832,0.29,1.689,0.483,2.552,0.652l0,0c0.863,0.169,1.736,0.242,2.614,0.271l0,0    c0.664,0.023,1.328,0.004,1.99-0.059c0.473-0.044,0.942-0.111,1.407-0.205c0.578-0.116,1.147-0.264,1.71-0.438    c0.345-0.107,0.687-0.219,1.023-0.349l0,0c0.299-0.115,0.587-0.261,0.871-0.412c0.067-0.036,0.137-0.069,0.206-0.102l0.008,0.012    c-0.082,0.047-0.166,0.091-0.25,0.133c-0.451,0.219-0.894,0.452-1.32,0.717l0,0c-0.132,0.082-0.255,0.175-0.365,0.285l0,0    c-0.109,0.109-0.171,0.239-0.181,0.395c0,0,0,0,0,0c-0.009,0.137-0.001,0.272,0.022,0.407l0,0    c0.058,0.327,0.178,0.627,0.351,0.912c0.186,0.306,0.39,0.594,0.661,0.83c0.274,0.238,0.591,0.33,0.953,0.287l0,0    c0.378-0.045,0.743-0.146,1.104-0.261l0,0c1.185-0.375,2.333-0.84,3.414-1.455l0,0c0.658-0.374,1.321-0.744,1.886-1.257    c0.01-0.009,0.022-0.016,0.033-0.024c0.259-0.22,0.466-0.475,0.556-0.811c0.076-0.283,0.129-0.571,0.143-0.863    c0.021-0.427,0.059-0.854,0.03-1.23c-0.004-0.271-0.003-0.492-0.017-0.711c-0.022-0.358-0.042-0.717-0.078-1.075    c-0.036-0.368-0.059-0.737-0.103-1.104c-0.082-0.69-0.184-1.377-0.316-2.061c-0.151-0.785-0.325-1.565-0.548-2.333    c-0.375-1.295-0.851-2.551-1.461-3.756c-0.25-0.493-0.524-0.971-0.859-1.411l0,0c-0.151-0.199-0.317-0.388-0.473-0.584    c-0.438-0.554-0.99-0.966-1.618-1.278c-0.35-0.174-0.713-0.316-1.083-0.446c-0.77-0.27-1.547-0.502-2.36-0.605l0,0    c-0.343-0.043-0.681-0.031-1.018,0.042l0,0c-0.219,0.047-0.4,0.16-0.537,0.338c-0.052,0.068-0.1,0.14-0.146,0.213    c-0.063,0.101-0.137,0.193-0.231,0.267l0,0c-0.036,0.027-0.071,0.053-0.121,0.043l0,0c-0.423-0.079-0.845-0.166-1.275-0.209l0,0    c-0.561-0.055-1.121-0.083-1.684-0.084c-0.596-0.001-1.189,0.04-1.78,0.118l0,0c-0.157,0.021-0.314,0.046-0.473,0.061    c-0.066,0.006-0.122-0.006-0.163-0.061c-0.038-0.051-0.08-0.1-0.12-0.15l0,0c-0.076-0.095-0.149-0.192-0.23-0.284l0,0    c-0.198-0.223-0.431-0.395-0.729-0.461c-0.272-0.061-0.549-0.085-0.828-0.064c-0.359,0.028-0.715,0.081-1.063,0.172    c-0.792,0.208-1.579,0.433-2.33,0.766l0,0C8.174,6.159,7.995,6.23,7.815,6.3l0,0C7.596,6.385,7.395,6.51,7.191,6.629l0,0    C6.613,6.969,6.129,7.41,5.738,7.956l0,0C5.478,8.32,5.245,8.7,5.045,9.101l0,0c-0.487,0.98-0.893,1.995-1.252,3.027    c-0.422,1.214-0.774,2.45-1.027,3.712c-0.086,0.431-0.19,0.859-0.26,1.293l0,0c-0.053,0.334-0.1,0.669-0.15,1.004l0,0    c-0.046,0.313-0.101,0.625-0.138,0.939c-0.048,0.397-0.08,0.796-0.124,1.193l0,0c-0.071,0.645-0.11,1.29-0.068,1.938l0,0    c0.006,0.088,0.03,0.179-0.007,0.266v0c-0.027,0.066-0.021,0.143-0.006,0.213c0.054,0.253,0.155,0.479,0.351,0.66l0,0    c0.118,0.108,0.242,0.208,0.377,0.293l0,0c0.105,0.067,0.209,0.136,0.313,0.207c0.558,0.381,1.107,0.776,1.693,1.115    c0.387,0.224,0.776,0.443,1.17,0.655c0.698,0.375,1.405,0.73,2.157,0.987c0.162,0.056,0.325,0.111,0.482,0.18l0,0    c0.2,0.087,0.412,0.103,0.627,0.049l0,0c0.189-0.048,0.337-0.157,0.472-0.293h0c0.308-0.311,0.565-0.66,0.795-1.031    c0.112-0.181,0.237-0.354,0.33-0.547c0.105-0.22,0.186-0.447,0.194-0.694c0,0,0,0,0,0c0.011-0.321-0.121-0.561-0.407-0.717l0,0    c-0.282-0.154-0.563-0.309-0.842-0.468l0,0C9.548,22.982,9.373,22.875,9.197,22.768L9.197,22.768z M20.544,6.053    c0.002,0,0.005,0,0.007-0.001c0.169-0.027,0.335,0.002,0.501,0.024c0.7,0.091,1.372,0.288,2.036,0.521l0,0    c0.389,0.136,0.774,0.278,1.142,0.463c0.502,0.253,0.951,0.576,1.309,1.016l0,0c0.252,0.31,0.505,0.619,0.735,0.946l0,0    c0.192,0.273,0.354,0.566,0.507,0.863c0.491,0.953,0.893,1.944,1.23,2.96l0,0c0.328,0.989,0.571,2,0.769,3.023l0,0    c0.14,0.723,0.253,1.45,0.33,2.183l0,0c0.063,0.601,0.117,1.203,0.153,1.807c0.022,0.376,0.035,0.753,0.033,1.129    c-0.002,0.514-0.009,1.029-0.121,1.535l0,0c-0.037,0.167-0.112,0.316-0.193,0.462l0,0c-0.017,0.031-0.056,0.048-0.084,0.072    c-0.331,0.276-0.679,0.528-1.045,0.754c-0.634,0.393-1.28,0.762-1.961,1.069c-0.757,0.341-1.529,0.642-2.325,0.878    c-0.26,0.078-0.521,0.149-0.792,0.185c-0.158,0.021-0.307,0.011-0.427-0.106c-0.005-0.004-0.01-0.009-0.015-0.013    c-0.123-0.094-0.222-0.21-0.313-0.333c-0.126-0.17-0.23-0.354-0.332-0.54v0c-0.035-0.062-0.056-0.129-0.074-0.198    c-0.025-0.096-0.052-0.191-0.09-0.284c0,0,0,0,0,0c-0.024-0.056-0.014-0.117-0.003-0.177l0.008-0.007    c0.066-0.057,0.133-0.112,0.208-0.159l0,0c0.396-0.247,0.808-0.465,1.228-0.669l0,0c0.178-0.086,0.351-0.181,0.52-0.285l0,0    c0.113-0.069,0.179-0.143,0.213-0.224c0.035-0.084,0.04-0.184,0.001-0.315c-0.061-0.206-0.172-0.389-0.324-0.541l0,0    c-0.137-0.137-0.314-0.177-0.505-0.139l0,0c-0.139,0.028-0.264,0.091-0.386,0.158c-0.25,0.136-0.506,0.256-0.765,0.372    c-0.325,0.145-0.666,0.243-1.003,0.351c-0.579,0.186-1.166,0.339-1.763,0.454l0,0c-0.596,0.115-1.198,0.19-1.805,0.224    c-0.666,0.037-1.332,0.03-1.997-0.011c-0.751-0.046-1.497-0.138-2.233-0.297l0,0c-0.721-0.156-1.44-0.317-2.136-0.566    c-0.421-0.15-0.834-0.323-1.25-0.487l0,0c-0.136-0.053-0.273-0.094-0.419-0.102l0,0c-0.243-0.014-0.434,0.081-0.572,0.278l0,0    c-0.096,0.138-0.151,0.292-0.15,0.463l0,0c0,0.181,0.072,0.329,0.219,0.434l0,0c0.075,0.053,0.154,0.102,0.233,0.149l0,0    c0.476,0.287,0.957,0.563,1.448,0.822l0,0.019c-0.002,0.129-0.055,0.245-0.101,0.362c-0.015,0.038-0.031,0.076-0.052,0.11    c-0.286,0.477-0.575,0.95-0.965,1.354c-0.115,0.12-0.236,0.148-0.388,0.088l0,0c-0.373-0.147-0.756-0.265-1.124-0.426    c-0.481-0.211-0.95-0.447-1.412-0.697l0,0c-0.424-0.229-0.844-0.464-1.259-0.708c-0.534-0.314-1.034-0.678-1.546-1.025    c-0.112-0.076-0.226-0.151-0.34-0.225c-0.097-0.063-0.188-0.134-0.271-0.215c-0.085-0.083-0.125-0.183-0.124-0.302l0,0    c0.001-0.323,0-0.646-0.001-0.97l0,0c-0.001-0.429,0.041-0.854,0.085-1.28l0,0c0.034-0.321,0.065-0.643,0.096-0.964    c0.035-0.354,0.101-0.702,0.151-1.053l0,0c0.046-0.319,0.093-0.637,0.143-0.955l0,0c0.063-0.408,0.16-0.809,0.24-1.213    c0.258-1.297,0.617-2.566,1.054-3.813c0.325-0.929,0.693-1.841,1.12-2.729c0.218-0.452,0.471-0.88,0.773-1.281    C6.646,7.91,6.972,7.604,7.35,7.353C7.677,7.136,8.033,6.979,8.389,6.82l0,0c0.772-0.345,1.574-0.601,2.39-0.811    c0.402-0.103,0.811-0.18,1.229-0.172c0.103,0.002,0.204,0.017,0.306,0.028l0,0c0.186,0.021,0.332,0.115,0.452,0.254l0,0    c0.089,0.103,0.178,0.208,0.256,0.319c0.223,0.315,0.512,0.464,0.908,0.417c0.198-0.024,0.394-0.06,0.591-0.082l0,0    c0.605-0.069,1.211-0.097,1.819-0.089l0,0c0.518,0.006,1.033,0.044,1.547,0.102l0,0c0.186,0.021,0.37,0.055,0.553,0.103    c0.196,0.051,0.398,0.086,0.604,0.08l0,0c0.22-0.006,0.412-0.082,0.578-0.225l0,0c0.139-0.12,0.254-0.261,0.351-0.417    c0.028-0.045,0.058-0.09,0.089-0.134l0,0c0.038-0.052,0.088-0.085,0.151-0.098c0.103-0.02,0.206-0.04,0.311-0.04h0L20.544,6.053    L20.544,6.053z"
                fill="#050505" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M22.191,26.244c-0.135-0.104-0.451-0.671-0.552-0.808    c-0.13-0.177-0.239-0.367-0.344-0.559c-0.041-0.075-0.067-0.155-0.089-0.236c-0.023-0.089-0.047-0.177-0.083-0.263    c-0.041-0.097-0.023-0.204-0.007-0.307c0.004-0.031,0.035-0.049,0.058-0.069c0.073-0.063,0.147-0.123,0.229-0.174    c0.401-0.25,0.839-0.361,1.265-0.567c0.173-0.084,0.753-0.351,0.721-0.523c-0.161-0.859-1.25-0.081-1.513,0.036    c-0.33,0.147-0.657,0.245-1.001,0.355c-0.585,0.188-1.27,0.372-1.873,0.488c-0.604,0.116-1.213,0.193-1.828,0.227    c-0.672,0.037-1.45-0.006-2.122-0.047c-0.76-0.047-1.514-0.14-2.259-0.301c-0.728-0.158-1.617-0.344-2.319-0.595    c-0.197-0.07-1.652-0.536-1.697-0.29c-0.052,0.283,1.51,1.28,1.771,1.418c0.076,0.04,0.089,0.098,0.087,0.17    c-0.003,0.149-0.06,0.285-0.113,0.42c-0.018,0.046-0.039,0.092-0.064,0.135c-0.292,0.488-0.735,1.187-1.134,1.6    c-0.17,0.176-0.349,0.216-0.572,0.127c-0.374-0.148-0.993-0.39-1.363-0.552c-0.485-0.213-0.958-0.451-1.424-0.703    c-0.425-0.23-0.847-0.466-1.264-0.712c-0.537-0.316-1.041-0.682-1.555-1.031c-0.111-0.076-0.223-0.15-0.336-0.223    c-0.107-0.068-0.206-0.147-0.297-0.236c-0.12-0.116-0.175-0.256-0.174-0.423c0.001-0.323,0-0.646-0.001-0.968    c-0.002-0.435,0.096-1.282,0.141-1.714c0.033-0.321,0.064-0.642,0.096-0.963c0.035-0.355,0.101-0.707,0.152-1.06    c0.046-0.319,0.094-0.638,0.143-0.957c0.063-0.41,0.161-0.813,0.242-1.22c0.259-1.304,0.6-2.278,1.039-3.532    c0.327-0.935,0.757-1.958,1.188-2.851c0.223-0.462,0.481-0.9,0.79-1.31C6.411,7.651,6.75,7.333,7.145,7.071    c0.334-0.222,0.698-0.384,1.063-0.546c0.781-0.349,1.802-0.58,2.627-0.792c0.417-0.107,0.84-0.185,1.274-0.177    c0.108,0.002,0.214,0.017,0.321,0.029c0.23,0.025,0.413,0.14,0.561,0.311c0.093,0.107,0.185,0.217,0.267,0.333    c0.185,0.261,0.396,0.266,0.724,0.226c0.198-0.024,0.285-0.057,0.483-0.079c0.612-0.069,1.225-0.098,1.841-0.09    C16.83,6.29,17.35,6.328,17.87,6.386c0.194,0.021,0.386,0.058,0.577,0.107c0.181,0.047,0.367,0.081,0.558,0.075    c0.18-0.005,0.337-0.067,0.473-0.184c0.058-0.051,0.336-0.667,0.835-0.72c0.579-0.062,1.394,0.448,1.55,0.526    c0.25,0.125,0.495,0.26,0.738,0.399c0.504,0.287,0.967,0.632,1.407,1.008c0.225,0.192,0.429,0.406,0.638,0.615    c0.171,0.17,0.319,0.361,0.467,0.551c0.151,0.193,0.558,0.688,0.699,0.889c0.281,0.398,0.541,0.809,0.765,1.242    c0.141,0.272,0.267,0.552,0.395,0.832c0.101,0.219,0.198,0.44,0.276,0.668c0.216,0.626,0.433,1.252,0.569,1.902    c0.045,0.217,0.367,0.573,0.412,0.79c0.084,0.4-0.231,0.74-0.166,1.143c0.053,0.324,0.093,0.649,0.135,0.974    c0.012,0.091,0.008,0.185,0.027,0.273c0.023,0.109,0.027,0.221,0.034,0.33c0.01,0.145,0.025,0.29,0.034,0.435    c0.007,0.122,0,0.246,0.021,0.366c0.038,0.213,0.024,0.428,0.035,0.641c0.02,0.405,0.012,0.811-0.035,1.216    c-0.028,0.243,0.001,0.49-0.024,0.735c-0.017,0.167-0.035,0.334-0.063,0.5c-0.049,0.284-0.139,0.557-0.244,0.824    c-0.087,0.222-0.193,0.435-0.309,0.643c-0.188,0.338-0.49,0.906-0.752,1.185c-0.178,0.189-0.388,0.345-0.591,0.509    c-0.324,0.262-0.941,0.339-1.308,0.531c-0.357,0.187-0.733,0.331-1.116,0.456c-0.415,0.136-0.842,0.221-1.27,0.306    C22.49,26.181,22.34,26.212,22.191,26.244"
                style="fill:currentColor" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M22.232,25.957c0.149-0.031,0.298-0.063,0.447-0.092    c0.428-0.085,0.855-0.17,1.27-0.306c0.383-0.125,0.759-0.269,1.116-0.456c0.367-0.192,0.717-0.41,1.041-0.672    c0.203-0.164,0.413-0.319,0.591-0.509c0.262-0.279,0.523-0.561,0.711-0.898c0.116-0.208,0.222-0.421,0.309-0.643    c0.105-0.268,0.195-0.54,0.244-0.824c0.028-0.166,0.046-0.332,0.063-0.499c0.025-0.246-0.004-0.493,0.024-0.735    c0.046-0.405,0.054-0.812,0.035-1.216c-0.01-0.213,0.002-0.428-0.035-0.641c-0.021-0.119-0.014-0.244-0.021-0.366    c-0.009-0.145-0.024-0.29-0.034-0.435c-0.007-0.109-0.011-0.221-0.034-0.33c-0.019-0.089-0.015-0.182-0.027-0.273    c-0.042-0.326-0.083-0.651-0.135-0.975c-0.065-0.403-0.129-0.806-0.214-1.206c-0.045-0.217-0.099-0.432-0.145-0.649    c-0.136-0.65-0.353-1.276-0.569-1.902c-0.079-0.228-0.176-0.449-0.276-0.669c-0.128-0.279-0.254-0.559-0.395-0.832    c-0.224-0.433-0.483-0.844-0.765-1.242c-0.142-0.2-0.28-0.402-0.431-0.595c-0.148-0.19-0.296-0.38-0.467-0.551    c-0.209-0.208-0.413-0.422-0.638-0.614c-0.44-0.375-0.903-0.721-1.407-1.008c-0.243-0.138-0.488-0.274-0.738-0.399    c-0.292-0.145-0.594-0.265-0.899-0.381c-0.113-0.043-0.232-0.074-0.328-0.154c0.185-0.03,0.368,0,0.55,0.023    c0.711,0.093,1.395,0.292,2.07,0.529c0.396,0.139,0.788,0.284,1.162,0.472c0.523,0.264,0.991,0.601,1.364,1.059    c0.255,0.313,0.51,0.625,0.743,0.955c0.196,0.28,0.362,0.579,0.519,0.883c0.496,0.961,0.9,1.959,1.24,2.985    c0.331,0.996,0.576,2.014,0.775,3.043c0.14,0.729,0.254,1.46,0.332,2.197c0.063,0.604,0.117,1.208,0.153,1.814    c0.023,0.38,0.035,0.761,0.033,1.141c-0.002,0.525-0.01,1.052-0.125,1.57c-0.041,0.184-0.121,0.347-0.21,0.508    c-0.026,0.048-0.079,0.083-0.123,0.119c-0.336,0.282-0.691,0.538-1.064,0.769c-0.641,0.396-1.293,0.77-1.981,1.079    c-0.764,0.344-1.543,0.647-2.346,0.886c-0.269,0.08-0.539,0.153-0.818,0.19C22.588,26.137,22.393,26.113,22.232,25.957"
                style="fill:currentColor" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M14.021,16.794c-0.008,0.452-0.062,0.85-0.226,1.226    c-0.167,0.386-0.391,0.732-0.735,0.986c-0.274,0.201-0.572,0.364-0.903,0.446c-0.386,0.097-0.771,0.058-1.145-0.073    c-0.192-0.067-0.383-0.138-0.57-0.217c-0.338-0.144-0.625-0.36-0.88-0.619c-0.118-0.12-0.192-0.267-0.261-0.417    c-0.167-0.367-0.274-0.749-0.309-1.15c-0.03-0.353,0.021-0.688,0.167-1.011c0.214-0.477,0.542-0.862,0.947-1.186    c0.081-0.064,0.164-0.127,0.243-0.194c0.348-0.292,0.748-0.447,1.203-0.459c0.216-0.005,0.43-0.003,0.641,0.048    c0.279,0.067,0.539,0.178,0.771,0.349c0.096,0.071,0.188,0.146,0.284,0.216c0.131,0.097,0.242,0.212,0.324,0.354    c0.022,0.04,0.045,0.081,0.074,0.116c0.174,0.216,0.261,0.467,0.301,0.737C13.99,16.243,14.048,16.538,14.021,16.794"
                fill="#010101" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M22.807,16.514c-0.025,0.464-0.113,0.917-0.323,1.333    c-0.286,0.566-0.737,0.967-1.313,1.228c-0.241,0.109-0.502,0.144-0.762,0.168c-0.66,0.062-1.235-0.138-1.725-0.583    c-0.086-0.078-0.161-0.166-0.229-0.259c-0.16-0.221-0.306-0.451-0.433-0.693c-0.15-0.286-0.212-0.594-0.221-0.91    c-0.02-0.645,0.159-1.236,0.505-1.779c0.113-0.178,0.256-0.325,0.436-0.437c0.527-0.331,1.099-0.517,1.723-0.5    c0.703,0.019,1.299,0.277,1.745,0.841c0.265,0.335,0.479,0.694,0.565,1.121C22.806,16.2,22.814,16.355,22.807,16.514"
                fill="#010101" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M7.224,8.246C7.227,8.15,7.263,8.074,7.306,8.001    c0.185-0.307,0.446-0.532,0.753-0.71c0.16-0.093,0.325-0.172,0.498-0.238C8.741,6.984,8.923,6.984,9.105,7.06    C9.289,7.137,9.321,7.3,9.203,7.462C9.089,7.62,8.934,7.713,8.761,7.778c-0.314,0.12-0.606,0.274-0.879,0.47    C7.777,8.324,7.67,8.4,7.552,8.457C7.375,8.542,7.203,8.401,7.224,8.246"
                fill="#FFFFFF" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M9.812,7.168C9.675,7.167,9.552,7.063,9.559,6.94    c0.008-0.148,0.122-0.274,0.274-0.273c0.148,0.001,0.261,0.107,0.253,0.255C10.078,7.069,9.971,7.169,9.812,7.168"
                fill="#FFFFFF" fill-rule="evenodd" />
            <path clip-rule="evenodd"
                d="M20.524,5.886c-0.116,0.001-0.229,0.021-0.342,0.044    c-0.106,0.021-0.192,0.076-0.255,0.164c-0.034,0.046-0.065,0.095-0.096,0.144c-0.087,0.142-0.191,0.269-0.317,0.378    c-0.136,0.117-0.293,0.179-0.473,0.184c-0.19,0.006-0.376-0.028-0.558-0.075c-0.19-0.049-0.382-0.086-0.576-0.107    c-0.52-0.058-1.04-0.096-1.563-0.103c-0.615-0.007-1.229,0.021-1.84,0.09c-0.198,0.022-0.395,0.059-0.593,0.083    c-0.328,0.04-0.565-0.085-0.75-0.347c-0.082-0.116-0.174-0.225-0.267-0.333c-0.148-0.171-0.331-0.285-0.561-0.311    c-0.107-0.012-0.213-0.027-0.321-0.029c-0.434-0.008-0.858,0.07-1.274,0.177c-0.826,0.212-1.637,0.472-2.417,0.82    C7.956,6.829,7.592,6.991,7.257,7.213c-0.395,0.262-0.734,0.58-1.019,0.958c-0.309,0.41-0.567,0.848-0.79,1.31    c-0.43,0.893-0.8,1.811-1.127,2.746c-0.439,1.254-0.801,2.531-1.06,3.836c-0.081,0.407-0.178,0.81-0.241,1.22    c-0.049,0.319-0.097,0.638-0.143,0.957c-0.051,0.353-0.117,0.705-0.152,1.06c-0.032,0.321-0.063,0.642-0.096,0.963    c-0.045,0.432-0.088,0.864-0.086,1.299c0.001,0.323,0.002,0.645,0.001,0.968c0,0.167,0.055,0.307,0.174,0.423    c0.091,0.089,0.19,0.167,0.297,0.236c0.113,0.072,0.225,0.147,0.336,0.222c0.515,0.349,1.019,0.715,1.555,1.031    c0.417,0.246,0.839,0.482,1.265,0.712c0.466,0.252,0.938,0.49,1.424,0.703c0.37,0.162,0.755,0.28,1.129,0.428    c0.223,0.088,0.401,0.048,0.571-0.127c0.399-0.413,0.696-0.896,0.989-1.384c0.025-0.042,0.046-0.088,0.064-0.135    c0.053-0.136,0.109-0.271,0.112-0.42c0.001-0.072-0.011-0.13-0.087-0.17c-0.489-0.258-0.968-0.533-1.442-0.819    c-0.076-0.045-0.151-0.092-0.223-0.143c-0.101-0.072-0.148-0.173-0.149-0.297c0-0.135,0.044-0.257,0.12-0.366    c0.102-0.146,0.244-0.217,0.425-0.207c0.128,0.007,0.248,0.044,0.367,0.09c0.418,0.165,0.833,0.338,1.255,0.489    c0.702,0.251,1.429,0.415,2.157,0.572c0.745,0.161,1.499,0.254,2.259,0.301c0.671,0.042,1.343,0.048,2.016,0.011    c0.615-0.034,1.224-0.11,1.828-0.227s1.197-0.271,1.783-0.459c0.344-0.11,0.69-0.21,1.021-0.357    c0.263-0.117,0.523-0.24,0.776-0.377c0.108-0.059,0.217-0.116,0.339-0.141c0.132-0.027,0.257-0.003,0.353,0.093    c0.131,0.132,0.228,0.291,0.281,0.47c0.05,0.168,0.009,0.255-0.142,0.348c-0.164,0.101-0.332,0.193-0.505,0.276    c-0.425,0.206-0.842,0.428-1.243,0.678c-0.082,0.051-0.157,0.111-0.229,0.174c-0.023,0.02-0.053,0.039-0.058,0.069    c-0.016,0.103-0.033,0.209,0.007,0.307c0.036,0.086,0.06,0.174,0.083,0.263c0.022,0.082,0.048,0.162,0.089,0.236    c0.106,0.192,0.214,0.382,0.344,0.559c0.101,0.136,0.211,0.263,0.346,0.367c0.16,0.156,0.355,0.18,0.565,0.152    c0.279-0.037,0.549-0.11,0.818-0.19c0.803-0.239,1.583-0.542,2.346-0.886c0.688-0.31,1.34-0.683,1.98-1.079    c0.374-0.231,0.728-0.487,1.064-0.769c0.044-0.037,0.097-0.071,0.123-0.119c0.089-0.161,0.169-0.324,0.21-0.508    c0.114-0.518,0.122-1.045,0.125-1.57c0.002-0.38-0.01-0.76-0.033-1.141c-0.036-0.606-0.091-1.21-0.154-1.814    c-0.077-0.737-0.191-1.469-0.331-2.197c-0.199-1.03-0.444-2.048-0.775-3.043c-0.34-1.025-0.745-2.024-1.24-2.985    c-0.157-0.304-0.323-0.604-0.519-0.883c-0.232-0.33-0.488-0.642-0.743-0.955c-0.373-0.458-0.841-0.795-1.364-1.059    c-0.374-0.189-0.766-0.333-1.162-0.472c-0.675-0.236-1.358-0.436-2.07-0.529C20.892,5.886,20.709,5.856,20.524,5.886     M29.821,20.746c0.03,0.371-0.009,0.792-0.029,1.214c-0.014,0.28-0.065,0.557-0.138,0.828c-0.081,0.302-0.27,0.529-0.502,0.727    c-0.012,0.01-0.025,0.018-0.037,0.028c-0.557,0.505-1.209,0.868-1.856,1.235c-1.071,0.609-2.208,1.069-3.382,1.441    c-0.351,0.111-0.706,0.21-1.074,0.254c-0.312,0.037-0.586-0.042-0.822-0.247c-0.258-0.224-0.451-0.5-0.627-0.791    c-0.162-0.266-0.275-0.547-0.329-0.854c-0.021-0.122-0.028-0.244-0.02-0.367c0.007-0.113,0.052-0.207,0.132-0.286    c0.101-0.101,0.214-0.187,0.335-0.262c0.42-0.262,0.858-0.493,1.304-0.708c0.125-0.061,0.245-0.128,0.364-0.199    c0.038-0.022,0.048-0.043,0.021-0.081c-0.036-0.05-0.07-0.101-0.103-0.153c-0.035-0.057-0.082-0.064-0.138-0.037    c-0.086,0.042-0.173,0.083-0.258,0.127c-0.278,0.147-0.56,0.291-0.853,0.403c-0.332,0.128-0.671,0.239-1.012,0.345    c-0.558,0.173-1.122,0.319-1.694,0.434c-0.459,0.092-0.923,0.158-1.39,0.203c-0.655,0.062-1.312,0.08-1.968,0.058    c-0.869-0.03-1.733-0.102-2.587-0.269c-0.855-0.167-1.705-0.358-2.529-0.646c-0.416-0.146-0.826-0.311-1.233-0.479    c-0.096-0.04-0.192-0.08-0.297-0.087c-0.094-0.006-0.193,0.11-0.171,0.201c0.009,0.039,0.045,0.05,0.074,0.067    c0.214,0.128,0.426,0.26,0.643,0.383c0.28,0.16,0.562,0.315,0.845,0.47c0.225,0.123,0.328,0.312,0.319,0.564    c-0.007,0.223-0.082,0.428-0.178,0.626c-0.09,0.188-0.212,0.356-0.321,0.532c-0.224,0.36-0.473,0.7-0.772,1.001    c-0.113,0.114-0.235,0.208-0.394,0.248c-0.178,0.045-0.354,0.032-0.519-0.04c-0.162-0.071-0.329-0.128-0.496-0.185    c-0.744-0.254-1.442-0.605-2.132-0.977c-0.392-0.21-0.78-0.429-1.165-0.652c-0.583-0.337-1.128-0.729-1.683-1.108    c-0.104-0.072-0.21-0.142-0.317-0.209c-0.127-0.081-0.243-0.174-0.354-0.276c-0.169-0.155-0.254-0.353-0.3-0.571    c-0.008-0.038-0.018-0.079-0.003-0.114c0.047-0.112,0.026-0.228,0.019-0.341c-0.041-0.639-0.001-1.274,0.068-1.909    c0.043-0.397,0.076-0.795,0.124-1.192c0.038-0.313,0.091-0.623,0.138-0.934c0.05-0.334,0.097-0.668,0.15-1.002    c0.069-0.433,0.172-0.858,0.259-1.287c0.251-1.255,0.601-2.483,1.021-3.69c0.356-1.026,0.76-2.034,1.244-3.008    c0.195-0.393,0.423-0.765,0.679-1.122c0.377-0.527,0.844-0.952,1.401-1.28c0.195-0.115,0.389-0.236,0.6-0.317    C8.059,6.386,8.24,6.313,8.419,6.234c0.743-0.33,1.521-0.552,2.304-0.757c0.338-0.089,0.685-0.14,1.034-0.167    c0.262-0.02,0.522,0.003,0.778,0.061C12.797,5.429,13,5.583,13.174,5.779c0.079,0.089,0.15,0.185,0.225,0.277    c0.039,0.048,0.079,0.095,0.115,0.144c0.079,0.107,0.184,0.14,0.313,0.128c0.161-0.014,0.32-0.04,0.479-0.062    c0.583-0.077,1.169-0.118,1.758-0.117c0.558,0.001,1.113,0.029,1.668,0.084c0.425,0.042,0.842,0.128,1.261,0.207    c0.102,0.019,0.181-0.019,0.254-0.076c0.11-0.085,0.197-0.192,0.271-0.311c0.042-0.068,0.087-0.136,0.136-0.199    c0.112-0.146,0.261-0.237,0.439-0.276c0.318-0.069,0.637-0.081,0.961-0.04c0.801,0.102,1.567,0.332,2.325,0.597    c0.363,0.127,0.72,0.267,1.063,0.438c0.605,0.302,1.138,0.697,1.561,1.232c0.155,0.196,0.32,0.383,0.471,0.582    c0.329,0.432,0.598,0.901,0.843,1.385c0.605,1.195,1.077,2.442,1.449,3.727c0.222,0.763,0.394,1.539,0.544,2.318    c0.131,0.679,0.233,1.362,0.314,2.048c0.043,0.366,0.066,0.734,0.103,1.101c0.035,0.356,0.055,0.712,0.077,1.069    C29.819,20.256,29.818,20.475,29.821,20.746"
                fill="#050505" fill-rule="evenodd" />
        </g>
    </g>
</svg>`;
    const appEl = document.querySelector(id);
    const div = document.createElement('div');
    div.innerHTML = svgStr;
    if (appEl) {
        appEl.appendChild(div);
    }
}

function addThemeColorCssVars() {
    const key = '__THEME_COLOR__';
    const defaultColor = '#1890ff';
    const themeColor = window.localStorage.getItem(key) || defaultColor;
    const cssVars = `--primary-color: ${themeColor}`;
    document.documentElement.style.cssText = cssVars;
}

addThemeColorCssVars();

initSvgLogo('#loadingLogo');